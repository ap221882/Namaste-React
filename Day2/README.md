What is Babel?

Babel is a transpiler. Since Js is a backward compatible language, ES6 introduces new features but old features still work, keeping in mind, old browsers. Babel converts the new JS code to the old one, which all browsers can understand.
refer: https://babeljs.io/setup#installation

What parcel do when we build code with it?
It minifies(using terser), does tree-shaking (eliminates dead code & does scope hoisting(concatenates into same scope when it is possible to do)), optimizes images without affecting their quality, does caching(content hashing, bundle sharing, etc) whenever you build with parcel. You can customise the same too.

DevDependency vs Dependency?
Dependencies you need only while development are kept separate and they are not sent to production.

What is .parcel-cache?
Parcel keeps this to keep info about your project so that it don't have to parse/analyse it again when it builds next time.

What is robots.txt?
This file give instructions to bots/web-crawlers which webpages they can/can't access.

Why dist/ is named as build folder?
dist/: "distribution", the compiled code/library, also named public/ or build/. The files meant for production or public use are usually located here.
refer: https://stackoverflow.com/questions/22842691/what-is-the-meaning-of-the-dist-directory-in-open-source-projects

What is NPM?
It is a package manager for JS projects as well as the repo where open source projects which can be downloaded are open-sourcely available.

What is NPX?
This utility helps us to run the scripts that are not available globally on our OS, without having to install them

What is hot module replacement?
HMR adds, removes, updates the modules without reloading entire page. e.g., style-loader implements HMR inteface which updates the styles directly when we update our CSS through the css modules.
