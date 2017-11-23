import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import TaskList from '../../components/TaskList';
import FormAddTask from '../../forms/FormAddTask';

const withHomepageScreen = compose(
	connect(),
	lifecycle({
		componentWillMount() {
			this.props.dispatch({ type: 'REQUEST_TASKS' });
		},
	})
);

const renderHomepageScreen = () => (
	<div>

		<h1>To-do list</h1>

		<h2>Tasks</h2>

		<FormAddTask />

		<h3>Active</h3>

		<TaskList type="active" />

		<h3>Completed</h3>

		<TaskList type="completed" />

	</div>
);

export default withHomepageScreen(renderHomepageScreen);
