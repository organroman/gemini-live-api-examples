export interface TranslationInfo {
  language: string;
  translatorIdentity: string;
  status: string;
  subscriberCount: number;
}

export interface QaStatus {
  sessionId: string;
  pendingSpeakerIdentities: string[];
  activeSpeakerIdentity: string | null;
  activeTranslatorIdentity: string | null;
  organizerTargetLanguage: string;
  // Only set for attendee-scoped requests (see /api/questions?identity=).
  requestedByCurrentUser?: boolean;
  approvedForCurrentUser?: boolean;
}
