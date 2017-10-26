# This builds and copies the build to your dist folder
echo "building gatsby source"
node node_modules/gatsby-cli/index.js build
echo "copying gatsby output to github pages root"
cp -r ./public/* ../

