#!/bin/bash
set -euo pipefail

# This script backs up PocketBase data from a remote server to the local pb_data directory

# Set default values for variables
REMOTE_HOST=${REMOTE_HOST:-"161.97.86.243"}
REMOTE_USER=${REMOTE_USER:-"root"}
REMOTE_PATH=${REMOTE_PATH:-"/var/lib/docker/volumes/2b9edbf182cd7838abf05668611d7b7b20ef06104a43a32dec9f2ae9791ded80/_data/"}
LOCAL_PATH=${LOCAL_PATH:-"$(dirname "$0")/pb_data/"}

echo "Backing up PocketBase data from ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH} to ${LOCAL_PATH}"
mkdir -p "${LOCAL_PATH}"

# Perform the backup using rsync
rsync -avz "${LOCAL_PATH}" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"

echo "✅ Backup completed successfully!"
