// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/src/pages/404.js")),
  "component---src-pages-case-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/src/pages/case.js")),
  "component---src-pages-art-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/src/pages/art.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/src/pages/index.js")),
  "component---src-pages-music-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/src/pages/music.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/src/pages/work.js")),
  "component---src-pages-writing-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/src/pages/writing.js")),
  "component---src-pages-z-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/src/pages/z.js"))
}

exports.json = {
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "404.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/404.json"),
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "case.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/case.json"),
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "art.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/art.json"),
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/index.json"),
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "music.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/music.json"),
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "work.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/work.json"),
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "writing.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/writing.json"),
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "z.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/z.json"),
  "layout-index.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/will.newton/Projects/williamnewton.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/will.newton/Projects/williamnewton.github.io/.cache/layouts/index.js"))
}