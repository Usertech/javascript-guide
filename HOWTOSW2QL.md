# Swagger2QL
This is a guide on how to properly set up your application to mock GraphQL environment on frontend from a swagger (.yaml) file, which contains documentation of your desired REST API, from scratch.

##### 1) Build you app via [re-app-builder](https://github.com/stackscz/re-app-builder)
##### 2) In `src` directory create:
 
 - `utils` folder
 - and inside utils folder `sw2ql` folder

##### 3) Copy these files from [example-project](example-project)
 - `createSwaggerApolloClient.js`
 - `createSwaggerNetworkInterface.js`
 - `withSwagger.js`

##### 4) In `src/utils` create:
 - `constants.js` file with this content:
    ```
    export const OAUTH_TOKEN_STORAGE_KEY = 5;
    ```
##### 5) Install necessary dependencies
```
		"apollo-client": "^2.0.3",
		"apollo-client-preset": "^1.0.3",
		"client-core": "https://github.com/stackscz/client-core.git#59f3eb07d7acd77661d9173e86fef9437f2bd260",
		"graphql": "^0.11.7",
		"graphql-tag": "^2.5.0",
		"history": "^4.6.1",
		"react": "^16.1.1",
		"react-apollo": "1.4.16",
		"react-dom": "^16.1.1",
		"react-redux": "^5.0.6",
		"react-router": "^4.0.0",
		"react-router-dom": "^4.2.2",
		"react-router-redux": "next",
		"recompose": "0.23.5",
		"redux": "^3.7.2",
		"redux-saga": "^0.15.3",
		"seamless-immutable": "^7.1.2",
		"store2": "^2.5.9",
		"swagger-graphql-schema": "https://github.com/brabeji/swagger-graphql-schema.git#bacfa65e5a178cf7e0b5fff70be793a0afa07008",
		"swagger-parser": "^4.0.1",
		"yaml-loader": "^0.5.0"
```

**Make sure `react apollo` is on version 1.4.16!**

##### 6) In `src` create:
 - `App.js` with the same content as in example project

##### 7) Add your custom `swagger.yaml` file to `src/utils/sw2ql/` folder

##### 8) Link `App` as a component in `src/index.js`

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```
## Summary

Your app is now set up! Feel free to start your queries and mutations. If you aren't sure exactly how: Inspire yourself from the example-project or take this react-apollo course https://www.howtographql.com/react-apollo/0-introduction/
