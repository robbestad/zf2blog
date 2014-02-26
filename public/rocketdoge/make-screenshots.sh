#!/bin/bash

# the original should be...




for ((i=1;i<=8;i++));
do
     # your-unix-command-here

convert ./images/screenshots/originals/image$i.png -resize 960x480 ./images/screenshots/img$i-big.png
# converts to 300x300
convert ./images/screenshots/originals/image$i.png -resize 300x300 ./images/screenshots/img$i.png

done


