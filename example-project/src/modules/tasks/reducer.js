import { remove } from 'lodash';

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'RECEIVE_TASKS':
			return action.payload.data;
		case 'TOGGLE_COMPLETED': {
			const newState = [...state];
			newState.find(item => item.id === action.payload.id).completed = action.payload.completed;
			return newState;
		}
		case 'DELETE_TASK': {
			const newState = [...state];
			remove(newState, (item) => item.id === action.payload.id);
			return newState;
		}
		case 'ADD_TASK': {
			const nextId = parseInt(state[state.length - 1].id, 10) + 1;
			const newState = [
				...state,
				{
					...action.payload.formData,
					id: nextId.toString(),
					completed: false,
					date_added: new Date(),
				},
			];
			return newState;
		}
		case 'EDIT_TASK_START': {
			const newState = [...state];
			newState.find(item => item.id === action.payload.id).editing = true;
			return newState;
		}
		case 'EDIT_TASK_END': {
			const newState = [...state];
			newState.find(item => item.id === action.payload.id).editing = false;
			return newState;
		}
		case 'EDIT_TASK': {
			const newState = [...state];
			newState.find(item => item.id === action.payload.id).title = action.payload.title;
			return newState;
		}
		default:
			return state;
	}
};

export default reducer;
