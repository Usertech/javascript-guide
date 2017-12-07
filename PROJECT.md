## Project structure and build

### Project structure

```
+-- manifest
+-- node_modules
+-- public
+-- src
|   +-- components
|   |   +-- DummyComponent
|   |   |   +-- index.js
|   |   |   +-- style.scss
|   |   |   +-- mutation.js
|   |   |   +-- query.js
|   |   |   +-- ...
|   +-- form fields
|   +-- forms
|   +-- modules
|   +-- queries (Only those used on multiple ocasions)
|   +-- mutations (Only those used on lutiple ocasions )
|   +-- screens
|   +-- styles (variables, mixins...)
|   +-- utils
|   +-- App.js
|   +-- htmlStub.js
|   +-- index.js
|   +-- routes.js
|   +-- store.js
|   +-- ...
+-- .babelrc
+-- .env
+-- .eslintrc
+-- package.json
+-- re-app-builder.config.js
+-- .yarn-error.log
+-- yarn.lock
+-- .gitignore
+-- ...
```

### Standard frontend project

    // package.json
    {
        ... snip ...
        "scripts": {
            "dev": "# whatever command(s) that is needed to run develoment process",
            "build": "# whatever command(s) that are needed to do production build",
            "build:dev": "# whatever command(s) that are needed to do unminified, development build"
        }
        ... snip ...
    }    

    $ # Starts development server
    $ npm run dev

    $ # Produces production build
    $ npm run build

    $ # Produces development build
    $ NODE_ENV=development npm run build

### Bulding project for browser

Use [re-app-builder](https://github.com/stackscz/re-app-builder).
Refer to [example-project](https://github.com/stackscz/re-app-builder/tree/1.0.0-dev/example-project) for more information.

[Home](README.md)
