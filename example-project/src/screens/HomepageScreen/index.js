import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import TaskList from '../../components/TaskList';
import FormAddTask from '../../forms/FormAddTask';
import Layout from '../../components/Layout';

const withHomepageScreen = compose(
	connect(),
	lifecycle({
		componentWillMount() {
			this.props.dispatch({ type: 'REQUEST_TASKS' });
		},
	})
);

const renderHomepageScreen = () => (
	<Layout>

		<h2>Tasks</h2>

		<FormAddTask />

		<h3>Active</h3>

		<TaskList type="active" />

		<h3>Completed</h3>

		<TaskList type="completed" />

	</Layout>
);

export default withHomepageScreen(renderHomepageScreen);
