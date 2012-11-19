#!/bin/bash
for f in *.gif ; do convert -resize 50x50 "$f" "${f}" ; done
