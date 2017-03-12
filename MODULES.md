## Modules

### CommonJS

javascript [module system]() was at first implemented in Node.js 
a.k.a. "server side javascript".
Same module specification can however be implemented in browser environment too.
Frontend projects are then structured as set of Node.js modules and converted into
browser apps during build.

Because browsers don't support [module system]() natively, module bundlers such as
`webpack` emerged. See [Build](BUILD.md) for more info.

- Node.js 
- Why modules? 
- https://nodejs.org/api/modules.html

### 



### `package.json`

This file identifies javascript module. 
It also marks parent directory as project directory.

### `npm`

node package manager - the original package manager

> <small>From [Wikipedia](https://en.wikipedia.org/wiki/Main_Page), the free encyclopedia</small>
>
> npm is the default package manager for the JavaScript runtime environment Node.js.

<a href="https://en.wikipedia.org/wiki/Npm_(software)">
    https://en.wikipedia.org/wiki/Npm_(software)
</a>

#### Package scripts

    $ # will execute command specified in `package.json` under `scripts.<script>` key
    $ npm run <script>

    $ # will execute command specified in `package.json` under `scripts.start` key
    $ npm run

    $ # will execute command specified in `package.json` under `scripts.test` key
    $ npm test
    
    ...

Example

    // package.json
    {
        ... snip ...
        "scripts": {
            "say-hi": "echo HI!"
        }
        ... snip ...
    }


    $ npm run say-hi
    $ HI!



### `yarn`

Latest package manager for Node.js

- Supports versions locking using lockfile
- Much faster than npm
- You should keep using `npm run <script>` for package scripts 

[https://yarnpkg.com/en/docs/install]()

    $ # installs `jquery`, saves dependency into package.json
    $ yarn add jquery 
    
    $ # installs `eslint`, saves dependency into package.json devDapendencies
    $ yarn add --dev eslint
    
    $ # ensures all deps are installed according to `yarn.lock`
    $ yarn install --pure-lockfile
    
    $ # ensures all deps are installed according to `package.json` and 
    $ # `yarn.lock` is regenerated
    $ yarn install

[https://yarnpkg.com/]()

### `node_modules`



### Module resolving



[Home](README.md)
