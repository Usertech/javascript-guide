import React from 'react';
import { compose, withHandlers } from 'recompose';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import withForm from 'client-core/lib/modules/forms/decorators/withForm';
import InputTextField from '../../form-fields/InputTextField';

import allTasksQuery from '../../components/TaskList/query';
import EDIT_TASK_MUTATION from './mutation';

const withFormEditTask = compose(
	connect(),
	graphql(EDIT_TASK_MUTATION, { name: 'editTodoMutation' }),
	withForm({
		form: 'FormEditTask',
		schema: {
			type: 'object',
			properties: {
				title: {
					type: 'string',
				},
			},
			required: ['title'],
		},
		errorMessages: {
			title: {
				required: 'This field is required.',
			},
		},
	}),
	withHandlers({
		handleFormEditTask: ({ dispatch, _id, editTodoMutation }) => values => {
			const body = {
				_id,
				name: values.name,
				isDone: false,
			};
			editTodoMutation({
				variables: {
					body,
				},
				// Optimistic response and update mock serve response so that UI fells faster
				optimisticResponse: {
					__typename: 'Mutation',
					editTodo: {
						__typename: 'Todo',
						_id: body._id,
						name: body.name,
						isDone: false,
					},
				},
				update: (store, { data: { editTodo } }) => {
					const data = store.readQuery({
						query: allTasksQuery,
					});

					// finds Todo by id and changes it's name
					data.getTodos.find(i => i._id === editTodo._id).name = values.name;
				},
			});
			dispatch({ type: 'EDIT_TASK_END', payload: {} });
		},
	})
);

const renderFormEditTask = ({ handleSubmit, handleFormEditTask }) => (
	<form onSubmit={handleSubmit(handleFormEditTask)} className="form-edit-task">
		<Field component={InputTextField} type="text" name="name" />
		<button type="submit" className="button">
			Submit
		</button>
	</form>
);

export default withFormEditTask(renderFormEditTask);
