import { NextRequest, NextResponse } from "next/server";
import TranslationSessionManager from "@/lib/translation-session-manager";

function withIdentityFlags(
  status: ReturnType<TranslationSessionManager["getQaStatus"]>,
  identity?: string | null
) {
  if (!identity) return status;

  return {
    ...status,
    requestedByCurrentUser: status.pendingSpeakerIdentities.includes(identity),
    approvedForCurrentUser: status.activeSpeakerIdentity === identity,
  };
}

function isOrganizerIdentity(
  requesterIdentity: string | undefined,
  organizerIdentity: string
) {
  return !!requesterIdentity && requesterIdentity === organizerIdentity;
}

function isSameUser(
  requesterIdentity: string | undefined,
  attendeeIdentity: string | undefined
) {
  return !!requesterIdentity && !!attendeeIdentity && requesterIdentity === attendeeIdentity;
}

// GET /api/questions?sessionId=...&identity=...
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("sessionId");
  const identity = req.nextUrl.searchParams.get("identity");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
  }

  const manager = TranslationSessionManager.getInstance();
  const session = manager.getSession(sessionId);
  if (!session) {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }

  const status = manager.getQaStatus(sessionId);
  return NextResponse.json(withIdentityFlags(status, identity));
}

// POST /api/questions
// Actions:
// - request { sessionId, attendeeIdentity }
// - cancel  { sessionId, attendeeIdentity }
// - approve { sessionId, attendeeIdentity, organizerTargetLanguage? }
// - end     { sessionId }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, sessionId } = body;
    const requesterIdentity = body.requesterIdentity as string | undefined;

    if (!sessionId || !action) {
      return NextResponse.json(
        { error: "Missing action or sessionId" },
        { status: 400 }
      );
    }

    const manager = TranslationSessionManager.getInstance();
    const session = manager.getSession(sessionId);
    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    if (action === "request") {
      const attendeeIdentity = body.attendeeIdentity as string | undefined;
      if (!attendeeIdentity) {
        return NextResponse.json(
          { error: "Missing attendeeIdentity" },
          { status: 400 }
        );
      }
      if (!isSameUser(requesterIdentity, attendeeIdentity)) {
        return NextResponse.json(
          { error: "Unauthorized request action" },
          { status: 403 }
        );
      }
      const status = manager.requestQuestion(sessionId, attendeeIdentity);
      return NextResponse.json(withIdentityFlags(status, attendeeIdentity));
    }

    if (action === "cancel") {
      const attendeeIdentity = body.attendeeIdentity as string | undefined;
      if (!attendeeIdentity) {
        return NextResponse.json(
          { error: "Missing attendeeIdentity" },
          { status: 400 }
        );
      }
      if (!isSameUser(requesterIdentity, attendeeIdentity)) {
        return NextResponse.json(
          { error: "Unauthorized cancel action" },
          { status: 403 }
        );
      }
      const status = manager.cancelQuestion(sessionId, attendeeIdentity);
      return NextResponse.json(withIdentityFlags(status, attendeeIdentity));
    }

    if (action === "approve") {
      const attendeeIdentity = body.attendeeIdentity as string | undefined;
      const organizerTargetLanguage =
        (body.organizerTargetLanguage as string | undefined) || "uk";

      if (!attendeeIdentity) {
        return NextResponse.json(
          { error: "Missing attendeeIdentity" },
          { status: 400 }
        );
      }
      if (!isOrganizerIdentity(requesterIdentity, session.organizerIdentity)) {
        return NextResponse.json(
          { error: "Only organizer can approve questions" },
          { status: 403 }
        );
      }

      const status = await manager.approveQuestion(
        sessionId,
        attendeeIdentity,
        organizerTargetLanguage
      );
      return NextResponse.json(withIdentityFlags(status, attendeeIdentity));
    }

    if (action === "end") {
      if (!isOrganizerIdentity(requesterIdentity, session.organizerIdentity)) {
        return NextResponse.json(
          { error: "Only organizer can end questions" },
          { status: 403 }
        );
      }
      const status = await manager.endActiveQuestion(sessionId);
      return NextResponse.json(status);
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (error) {
    console.error("Error handling questions route:", error);
    return NextResponse.json(
      { error: "Failed to process question action" },
      { status: 500 }
    );
  }
}
