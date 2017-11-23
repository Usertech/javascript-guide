import React from 'react';
import { compose, withHandlers } from 'recompose';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import withForm from 'client-core/lib/modules/forms/decorators/withForm';
import InputTextField from '../../form-fields/InputTextField';

const withFormAddTask = compose(
	connect(),
	withForm(
		{
			form: 'FormAddTask',
			schema: {
				type: 'object',
				properties: {
					title: {
						type: 'string',
					},
				},
				required: [
					'title',
				],
			},
			errorMessages: {
				title: {
					required: 'This field is required.',
				},
			},
		}
	),
	withHandlers({
		handleFormAddTask: ({ dispatch, reset }) => (values) => {
			dispatch({ type: 'ADD_TASK', payload: { formData: values } });
			reset();
		},
	})
);

const renderFormAddTask = ({ handleSubmit, handleFormAddTask }) => (
	<form onSubmit={handleSubmit(handleFormAddTask)}>
		<Field component={InputTextField} type="text" name="title" />
		<button type="submit">Add new</button>
	</form>
);

export default withFormAddTask(renderFormAddTask);
