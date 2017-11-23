import React from 'react';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

// modules
import createStore from 'client-core/lib/utils/createStore';
import formsModule from 'client-core/lib/modules/forms';
import { createRoutingModule } from 'client-core/lib/modules/routing';
import tasksModule from 'modules/tasks';

// Styles
import './styles/index.sass';

import Router from 'client-core/lib/modules/routing/components/Router';
import routes from './routes';

const history = createHistory();

const store = createStore(
	{
		modules: [
			createRoutingModule(history),
			formsModule,
			tasksModule,
		],
		enhancers: [
			window.devToolsExtension ? window.devToolsExtension() : f => f,
		],
	},
	{
		routes,
	},
);

const App = () => {
	return (
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>
	);
};

export default App;
