import React from 'react';
import { compose, withHandlers } from 'recompose';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import withForm from 'client-core/lib/modules/forms/decorators/withForm';
import InputTextField from '../../form-fields/InputTextField';

import allTasksQuery from '../../components/TaskList/query';
import ADD_TASK_MUTATION from './mutation';

const withFormAddTask = compose(
	connect(),
	// connects to apollo
	graphql(ADD_TASK_MUTATION, { name: 'addTodoMutation' }),
	// Redux form
	withForm({
		form: 'FormAddTask',
		schema: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
				},
			},
			required: ['name'],
		},
		errorMessages: {
			name: {
				required: 'This field is required.',
			},
		},
	}),
	withHandlers({
		handleFormAddTask: props => values => {
			const body = {
				name: values.name,
				isDone: false,
			};
			console.log('mutation fired');
			props.addTodoMutation({
				variables: {
					body,
				},
				// Optimistic response and update mock serve response so that UI fells faster
				optimisticResponse: {
					__typename: 'Mutation',
					addTodo: {
						__typename: 'Todo',
						_id: 'temporary',
						name: body.name,
						isDone: false,
					},
				},
				update: (store, { data: { addTodo } }) => {
					// Read the data from our cache for this query.
					const data = store.readQuery({ query: allTasksQuery });
					// Add our comment from the mutation to the end.
					data.getTodos.push(addTodo);
					// Write our data back to the cache.
					store.writeQuery({ query: allTasksQuery, data });
				},
			});
			props.reset();
		},
	})
);

const renderFormAddTask = ({ handleSubmit, handleFormAddTask }) => (
	<form onSubmit={handleSubmit(handleFormAddTask)} className="form-add-task">
		<Field component={InputTextField} type="text" name="name" />
		<button type="submit" className="button">
			<span className="fa fa-plus-circle" /> Add new
		</button>
	</form>
);

export default withFormAddTask(renderFormAddTask);
