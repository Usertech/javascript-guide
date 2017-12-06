import gql from 'graphql-tag';

const ALL_TASKS_QUERY = gql`
	query allTodosQuery {
		getTodos {
			_id
			name
			isDone
		}
	}
`;

export default ALL_TASKS_QUERY;
