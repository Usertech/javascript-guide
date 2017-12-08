# U+ `javascript`

> This document is a work in progress, please contribute!

This document contains best practices to follow when developing javascript
applications at U+. If something

_If some project has javascript code, it's a javascript application and this
guide applies._

If you are looking for help on how to set up a project check [re-app-builder](https://github.com/stackscz/re-app-builder).

If you are looking for help on how to set up a project with mocked GraphQL on frontend check [HOWTOSW2QL.md](HOWTOSW2QL.md)

There are four main parts in this doc which tries to cover topics needed for
successful js development.

* Syntax - evolution of javascript standards
* Ecosystem - what are modules in javascript and why they exist, what tools does
	js ecosystem use?
* Build - how to produce browser javascript from modularized project
* Architecture - architectural recommendations

## TOC

* Syntax

	* // TODO links to specs

* [Ecosystem](ECOSYSTEM.md)

	* Modules
	* `package.json`
	* `npm`
		* Package scripts
	* `yarn`
	* `node_modules`
	* Module resolving

* [Project structure and build](PROJECT.md)

	* generic frontend project structure
	* why build?
		* javascript versions
	* building
	* linting

* [Application architecture](ARCHITECTURE.md)
	* project structure
	* application state
		* `redux`
	* application ui
		* `react`
			* stateless (dumb) components
			* stateful (smart) components a.k.a. containers
			* `recompose`
			* "pulling" data from app state, `react-redux`
			* routing, `react-router`
	* side effects
		* `redux-saga`
	* `client-core`

* [Swagger2GraphQL guide](HOWTOSW2QL.md)
	* Guide on how to mock GraphQL endpoint from swagger.yaml on frontend
