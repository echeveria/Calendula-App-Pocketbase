#!/bin/sh

THIS_DIR=$(cd $(dirname $0); pwd)
exec $THIS_DIR/pocketbase serve --http 0.0.0.0:8090