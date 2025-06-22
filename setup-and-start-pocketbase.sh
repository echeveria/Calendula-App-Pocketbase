#!/bin/sh

THIS_DIR=$(cd $(dirname $0); pwd)

ADMIN_USER=${ADMIN_USER:-admin@example.com}
ADMIN_PASS=${ADMIN_PASS:-adminadmin}
echo "admin used"
$THIS_DIR/pocketbase superuser upsert ${ADMIN_USER} ${ADMIN_PASS}
echo "try to run"

exec  $THIS_DIR/pocketbase serve --http 0.0.0.0:8090