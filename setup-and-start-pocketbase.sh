#!/bin/sh

THIS_DIR=$(cd $(dirname $0); pwd)

ADMIN_USER=${ADMIN_USER:-admin@example.com}
ADMIN_PASS=${ADMIN_PASS:-adminadmin}

$THIS_DIR/pocketbase superuser upsert ${ADMIN_USER} ${ADMIN_PASS}
exec $THIS_DIR/pocketbase serve --http 0.0.0.0:8090