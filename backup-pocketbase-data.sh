#!/bin/bash
set -euo pipefail

# This script uploads PocketBase data from the local pb_data directory to a remote server

# Set default values for variables
REMOTE_HOST=${REMOTE_HOST:-"161.97.86.243"}
REMOTE_USER=${REMOTE_USER:-"root"}
REMOTE_PATH=${REMOTE_PATH:-"/opt/pocketbase/pb_data"}
LOCAL_PATH=${LOCAL_PATH:-"$(dirname "$0")/pb_data"}

echo "📤 Uploading PocketBase data from ${LOCAL_PATH} to ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
mkdir -p "${LOCAL_PATH}"

# Perform the upload using rsync (local -> remote)
rsync -avz "${LOCAL_PATH}/" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"

echo "✅ Upload completed successfully!"
