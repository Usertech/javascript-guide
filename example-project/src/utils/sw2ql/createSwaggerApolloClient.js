import { get as g, set, filter } from 'lodash';
import { ApolloClient, IntrospectionFragmentMatcher } from 'react-apollo';
import gql from 'graphql-tag';
import createSwaggerNetworkInterface from './createSwaggerNetworkInterface';

const IntrospectionQuery = gql`
	{
		__schema {
			types {
				kind
				name
				possibleTypes {
					name
				}
			}
		}
	}
`;

const createSwaggerApolloClient = ({ swagger }) => {
	const networkInterface = createSwaggerNetworkInterface({ swagger });
	return networkInterface
		.query({
			query: IntrospectionQuery,
		})
		.then(({ data }) => {
			const interfaces = filter(
				g(data, '__schema.types', []),
				type => type.possibleTypes !== null
			);
			const introspectionQueryResultData = set(
				data,
				'__schema.types',
				interfaces
			);
			const fragmentMatcher = new IntrospectionFragmentMatcher({
				introspectionQueryResultData,
			});
			return new ApolloClient({
				networkInterface,
				fragmentMatcher,
			});
		});
};

export default createSwaggerApolloClient;
