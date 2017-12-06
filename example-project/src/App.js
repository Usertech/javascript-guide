import React from 'react';

import createHistory from 'history/createBrowserHistory';

// modules
import createStore from 'client-core/lib/utils/createStore';
import formsModule from 'client-core/lib/modules/forms';
import { createRoutingModule } from 'client-core/lib/modules/routing';
import tasksModule from 'modules/tasks';

// sw2ql
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { applyMiddleware } from 'redux';

import {
	compose,
	withState,
	withPropsOnChange,
	branch,
	renderNothing,
} from 'recompose';

import withSwagger from './utils/withSwagger.js';
import createSwaggerApolloClient from './utils/createSwaggerApolloClient.js';

// Styles
import './styles/index.sass';

import Router from 'client-core/lib/modules/routing/components/Router';
import routes from './routes';

const history = createHistory();

const enhance = compose(
	withState('swagger', 'setSwagger', false), // creates swagger property
	withSwagger(), // fills swagger property

	withState('client', 'setClient'), // creates client property
	withPropsOnChange(['swagger'], ({ swagger, setClient }) => {
		createSwaggerApolloClient({ swagger }).then(setClient);
	}),

	withPropsOnChange(['client'], ({ client }) => {
		if (client) {
			const store = createStore({
				modules: [createRoutingModule(history), formsModule, tasksModule],
				reducers: {
					apollo: client.reducer(),
				},
				enhancers: [
					applyMiddleware(client.middleware()),
					typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
						? window.__REDUX_DEVTOOLS_EXTENSION__()
						: f => f // eslint-disable-line
				],
				// {
				// 	routes,
				// }
			});
			return {
				store,
			};
		}
		return {};
	}),
	branch(({ store }) => !store, renderNothing)
);

const App = ({ store, client }) => {
	return (
		<div>
			<ApolloProvider store={store} client={client}>
				<Router history={history} routes={routes} />
			</ApolloProvider>
		</div>
	);
};

export default enhance(App);
