import gql from 'graphql-tag';

const EDIT_TASK_MUTATION = gql`
	mutation editTodoMutation($body: TodoInput!) {
		editTodo(body: $body) {
			_id
			name
			isDone
		}
	}
`;

export default EDIT_TASK_MUTATION;
