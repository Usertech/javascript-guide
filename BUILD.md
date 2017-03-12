## Build

Today, many "frontend technologies" use Node.js as build environment.

### why build?
### javascript versions
### build tools
#### `npm run <script>`
#### `webpack` + `babel`
#### `re-app-builder`
##### js configuration
##### css configuration
##### fonts configuration
#### Example build of arbitrary js project with `re-app-builder`<a id="build-example"></a>

Use `re-app-builder`. This way you can *easily* start a javascript project from scratch!
Ideal for both quick hacking and production apps.

Start in empty directory

        $ yarn add --dev re-app-builder
        
        // package.json
        {
            ... snip ...
            "scripts": {
                "ab": "node ./node_modules/re-app-builder/bin",
                "dev": "npm run ab dev",
                "build": "npm run ab build"
            }
            ... snip ...
        }
        
        // .babelrc
        {
            "extends": "re-app-builder/configs/.babelrc"
        }
        
        // .gitignore
        node_modules
        npm-debug.log
        manifest


./src/index.js will be used as only entry point and named `app.js`

        // webpack.config.js
        module.exports = function() {
            return {
                entry: {
                    app: ['./src']
                }
            }
        }

Create simple app :tada:

        // src/index.js
        alert('AYY');

Start development server

        $ npm run dev

After a while, our awesome app should be served at [127.0.0.1:8080]()
 
Supported technologies, see [example project](./example)
 
- ECMAScript javascript
- Sass
- jpg,png images
- fonts

[Home](README.md)
