#!/bin/bash

# This script backs up PocketBase data from a remote server to the local pb_data directory

# Set default values for variables
REMOTE_HOST=${REMOTE_HOST:-"angelator312.top"}
REMOTE_USER=${REMOTE_USER:-"root"}
REMOTE_PATH=${REMOTE_PATH:-"/pb_data/"}
LOCAL_PATH=${LOCAL_PATH:-"$(dirname "$0")/pb_data"}

# Display backup information
echo "Backing up PocketBase data from ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH} to ${LOCAL_PATH}"

# Create local directory if it doesn't exist
mkdir -p "${LOCAL_PATH}"

# Perform the backup using rsync
rsync -avz "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}*" "${LOCAL_PATH}"

# Check if the backup was successful
if [ $? -eq 0 ]; then
    echo "Backup completed successfully!"
else
    echo "Backup failed. Please check your connection and try again."
    exit 1
fi

echo "Backup process completed."
