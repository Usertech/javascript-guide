import gql from 'graphql-tag';

export const CHANGE_STATE_OF_TASK = gql`
	mutation ChangeStateTodoMutation($_id: String!) {
		changeStateTodo(todoID: $_id) {
			_id
			isDone
		}
	}
`;

export const DELETE_TASK = gql`
	mutation DeleteTaskMutation($_id: String!) {
		deleteTodo(todoID: $_id) {
			_id
			name
			isDone
		}
	}
`;
