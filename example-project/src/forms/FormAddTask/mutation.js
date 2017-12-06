import gql from 'graphql-tag';

const ADD_TASK_MUTATION = gql`
	mutation addTodoMutation($body: TodoInput!) {
		addTodo(body: $body) {
			_id
			name
			isDone
		}
	}
`;

export default ADD_TASK_MUTATION;
