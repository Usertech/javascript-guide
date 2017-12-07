import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { graphql } from 'react-apollo';
import { CHANGE_STATE_OF_TASK, DELETE_TASK } from './mutations';
import ALL_TASKS_QUERY from 'queries/allTasks';

import FormEditTask from '../../forms/FormEditTask';

const mapStateToProps = state => {
	return {
		formOpenAt: state.tasks.formOpenAt,
	};
};

const withTaskItem = compose(
	connect(mapStateToProps),
	graphql(CHANGE_STATE_OF_TASK, { name: 'changeStateTodoMutation' }),
	graphql(DELETE_TASK, { name: 'deleteTodoMutation' }),
	withHandlers({
		handleComplete: props => () => {
			props.changeStateTodoMutation({
				variables: {
					_id: props._id,
				},
			});
		},
		handleDelete: props => () => {
			const confirm = window.confirm(
				`Are you sure you want to delete task with title: ${props.name}?`
			);
			if (confirm) {
				props.deleteTodoMutation({
					variables: {
						_id: props._id,
					},
					// Optimistic response and update mock serve response so that UI fells faster
					optimisticResponse: {
						__typename: 'Mutation',
						deleteTodo: {
							__typename: 'Todo',
							_id: props._id,
							name: props.name,
							isDone: false,
						},
					},
					update: (store, { data: { deleteTodo } }) => {
						// Read the data from our cache for this query.
						const data = store.readQuery({ query: ALL_TASKS_QUERY });

						// Finds and splices out desired Todo
						const index = data.getTodos.indexOf(
							data.getTodos.find(i => i._id === deleteTodo._id)
						);
						data.getTodos.splice(index, 1);

						// Write our data back to the cache.
						store.writeQuery({ query: ALL_TASKS_QUERY, data });
					},
				});
			}
		},
		handleEdit: ({ dispatch, _id }) => () => {
			dispatch({ type: 'EDIT_TASK_START', payload: { _id } });
		},
	})
);

const renderTaskItem = props => (
	<div className="task-item">
		<label className="checkbox">
			<input
				type="checkbox"
				checked={props.isDone}
				onChange={props.handleComplete}
			/>
			<span>
				<span className="fa fa-check" />
			</span>
		</label>
		<div className="task-item__title">
			{props.isDone ? (
				<s>{props.name}</s>
			) : props.formOpenAt === props._id ? (
				<FormEditTask initialValues={{ name }} _id={props._id} />
			) : (
				<span>{props.name}</span>
			)}
		</div>
		<div className="task-item__actions">
			{!props.isDone &&
				!props.editing && (
					<button
						onClick={props.handleEdit}
						className="button-action button-action--edit"
					>
						<span className="fa fa-edit" />
					</button>
				)}
			<button
				onClick={props.handleDelete}
				className="button-action button-action--delete"
			>
				<span className="fa fa-trash" />
			</button>
		</div>
	</div>
);

export default withTaskItem(renderTaskItem);
