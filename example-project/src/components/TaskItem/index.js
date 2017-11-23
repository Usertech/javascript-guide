import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import FormEditTask from '../../forms/FormEditTask';

const withTaskItem = compose(
	connect(),
	withHandlers({
		handleComplete: ({ dispatch, id, completed }) => () => {
			dispatch({ type: 'TOGGLE_COMPLETED', payload: { id, completed: !completed } });
		},
		handleDelete: ({ dispatch, id, title }) => () => {
			const confirm = window.confirm(`Are you sure you want to delete task with title: ${title}?`);
			if (confirm) {
				dispatch({ type: 'DELETE_TASK', payload: { id } });
			}
		},
		handleEdit: ({ dispatch, id }) => () => {
			dispatch({ type: 'EDIT_TASK_START', payload: { id } });
		},
	})
);

const renderTaskItem = ({ id, title, completed, editing, handleComplete, handleDelete, handleEdit }) => (
	<div>
		<input type="checkbox" checked={completed} onChange={handleComplete} />
		{completed ? (
			<strike>{title}</strike>
		) : (
			editing ? (
				<FormEditTask initialValues={{ title }} id={id} />
			) : (
				<span>{title}</span>
			)
		)}
		{!completed && !editing && (
			<button onClick={handleEdit}>Edit</button>
		)}
		<button onClick={handleDelete}>Delete</button>
	</div>
);

export default withTaskItem(renderTaskItem);
