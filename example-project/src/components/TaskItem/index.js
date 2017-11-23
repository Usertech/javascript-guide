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
	<div className="task-item">
		<label className="checkbox"><input type="checkbox" checked={completed} onChange={handleComplete} /><span><span className="fa fa-check" /></span></label>
		<div className="task-item__title">
			{completed ? (
				<strike>{title}</strike>
			) : (
				editing ? (
					<FormEditTask initialValues={{ title }} id={id} />
				) : (
					<span>{title}</span>
				)
			)}
		</div>
		<div className="task-item__actions">
			{!completed && !editing && (
				<button onClick={handleEdit} className="button-action button-action--edit"><span className="fa fa-edit" /></button>
			)}
			<button onClick={handleDelete} className="button-action button-action--delete"><span className="fa fa-trash" /></button>
		</div>
	</div>
);

export default withTaskItem(renderTaskItem);
