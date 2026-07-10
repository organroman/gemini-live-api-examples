#!/usr/bin/env bash
# Deploy live-translate to Cloud Run.
#
# Prerequisites (one-time, see README.md "Deploy to Cloud Run"):
#   - gcloud CLI authenticated, with a default project set
#     (gcloud config set project <PROJECT_ID>)
#   - APIs enabled: secretmanager, run, cloudbuild, artifactregistry
#   - Secrets created in Secret Manager: gemini-api-key, livekit-api-key,
#     livekit-api-secret
#
# Usage:
#   ./scripts/deploy.sh
#
# Optional overrides:
#   PROJECT_ID, REGION, SERVICE_NAME, LIVEKIT_URL

set -euo pipefail

REGION="${REGION:-europe-west3}"
SERVICE_NAME="${SERVICE_NAME:-live-translate}"
PROJECT_ID="${PROJECT_ID:-$(gcloud config get-value project 2>/dev/null)}"
LIVEKIT_URL="${LIVEKIT_URL:-wss://dan-class-room-i65vno3d.livekit.cloud}"

if [[ -z "$PROJECT_ID" ]]; then
  echo "error: no GCP project set. Run 'gcloud config set project <PROJECT_ID>' or pass PROJECT_ID=<id>." >&2
  exit 1
fi

echo "Deploying $SERVICE_NAME to project $PROJECT_ID ($REGION)..."

gcloud run deploy "$SERVICE_NAME" \
  --source . \
  --region "$REGION" \
  --project "$PROJECT_ID" \
  --allow-unauthenticated \
  --min-instances 0 \
  --max-instances 1 \
  --timeout 3600 \
  --no-cpu-throttling \
  --set-secrets "GEMINI_API_KEY=gemini-api-key:latest,LIVEKIT_API_KEY=livekit-api-key:latest,LIVEKIT_API_SECRET=livekit-api-secret:latest" \
  --set-env-vars "LIVEKIT_URL=${LIVEKIT_URL}"
