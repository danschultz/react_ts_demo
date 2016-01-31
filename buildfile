#!/bin/sh
#
# Builds the project to build/

if ! test -d build/
then
  echo "› creating build dir"
  mkdir build/
fi

echo "› running browserify"
node node_modules/browserify/bin/cmd.js -p [tsify] -s App web/app.tsx typings/browser.d.ts > build/app.js

echo "› copying files"
for file in $(find web -name *.html)
do
  rsync -R $file build/
done
cp -R build/web/ build/
rm -R build/web/
