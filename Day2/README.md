### What is Babel?

Babel is a transpiler. Since Js is a backward compatible language, ES6 introduces new features but old features still work, keeping in mind, old browsers. Babel converts the new JS code to the old one, which all browsers can understand.
refer: https://babeljs.io/setup#installation

### What parcel do when we build code with it?

It minifies(using terser), does tree-shaking (eliminates dead code & does scope hoisting(concatenates into same scope when it is possible to do)), optimizes images without affecting their quality, does caching(content hashing, bundle sharing, etc) whenever you build with parcel. You can customise the same too.

### DevDependency vs Dependency?

Dependencies you need only while development are kept separate and they are not sent to production.

### What is .parcel-cache?

Parcel keeps this to keep info about your project so that it don't have to parse/analyse it again when it builds next time.

### What is robots.txt?

This file give instructions to bots/web-crawlers which webpages they can/can't access.

### Why dist/ is named as build folder?

dist/: "distribution", the compiled code/library, also named public/ or build/. The files meant for production or public use are usually located here.
refer: https://stackoverflow.com/questions/22842691/what-is-the-meaning-of-the-dist-directory-in-open-source-projects

### What is NPM?

It is a package manager for JS projects as well as the repo where there are JavaScript open source projects which can be downloaded through npm cli & are open-sourcely available.

### What is NPX?

This utility helps us to run the scripts that are not available globally on our OS, without having to install them

### What is hot module replacement?

HMR adds, removes, updates the modules without reloading entire page. e.g., style-loader implements HMR inteface which updates the styles directly when we update our CSS through the css modules.

### What is Tree Shaking?

Tree shaking is concept where you remove unused code based the import and export of respective modules. Generally it is important in case of bundling in production codes.

### .gitignore?

It is file that is uploaded to github repo and in the local .git folder tels it to ignore some files/folders over that directory.

### Why I shouldn't update package.lock.json?

### Because it contains the exact hash/version of the dependencies and dependencies which ensure your code runs in production build also the same as it is running in development(because package.json can also indicate a range of version of dependencies (e.g., by ^))

### manifest.json?

It is used in PWAs, basically helps in the color of your loading page of webapp and icons according to the different mobiles. It also contain a range of key-value pair which help in describing information about your webapp(off course progressive).

### browserlist

Browserlist specifies which browsers should be supported in your frontend app. It is used by bundlers to make separate bundles and use them according to different browsers, e.g., legacy bundle for older and modern for latest browsers
https://stackoverflow.com/questions/55510405/what-is-the-significance-of-browserslist-in-package-json-created-by-create-react

# <noScript></noscript>

This HTML element defines a section of HTML to be inserted when script type is unsupportive or scripting is disabled in the browser.

### 5 superpowers of parcel?

1. Code Splitting
2. Scope Hoisting
3. Hot Reloading
4. Dependency Resolution
5. Node Emulation
