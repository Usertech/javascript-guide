import React from 'react';
import { compose, withHandlers } from 'recompose';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import withForm from 'client-core/lib/modules/forms/decorators/withForm';
import InputTextField from '../../form-fields/InputTextField';

const withFormEditTask = compose(
	connect(),
	withForm(
		{
			form: 'FormEditTask',
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
		handleFormEditTask: (props) => (values) => {
			const { dispatch, id } = props;
			dispatch({ type: 'EDIT_TASK', payload: { ...values, id } });
			dispatch({ type: 'EDIT_TASK_END', payload: { id } });
		},
	})
);

const renderFormEditTask = ({ handleSubmit, handleFormEditTask }) => (
	<form onSubmit={handleSubmit(handleFormEditTask)}>
		<Field component={InputTextField} type="text" name="title" />
		<button type="submit">Submit</button>
	</form>
);

export default withFormEditTask(renderFormEditTask);
