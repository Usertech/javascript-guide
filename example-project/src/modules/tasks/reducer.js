const reducer = (state = [], action) => {
	switch (action.type) {
		case 'EDIT_TASK_START': {
			const newState = [...state];
			newState.push((newState.formOpenAt = action.payload._id));
			return newState;
		}
		case 'EDIT_TASK_END': {
			const newState = [...state];
			newState.formOpenAt = null;
			return newState;
		}
		default:
			return state;
	}
};

export default reducer;
