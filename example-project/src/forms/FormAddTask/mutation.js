import gql from 'graphql-tag';

const ADD_TASK_MUTATION = gql`
	mutation AddTodoMutation($body: TodoInput!) {
		addTodo(body: $body) {
			_id
			name
			isDone
		}
	}
`;

export default ADD_TASK_MUTATION;
