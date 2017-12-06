import gql from 'graphql-tag';

const ALL_TASKS_QUERY = gql`
	query AllTodosQuery {
		getTodos {
			_id
			name
			isDone
		}
	}
`;

export default ALL_TASKS_QUERY;
