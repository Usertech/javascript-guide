import React from 'react';
import TaskList from '../../components/TaskList';
import FormAddTask from '../../forms/FormAddTask';
import Layout from '../../components/Layout';

const renderHomepageScreen = () => (
	<Layout>
		<h2>Tasks</h2>

		<FormAddTask />

		<h3>Active</h3>
		<TaskList isDone={false} />

		<h3>Completed</h3>

		<TaskList isDone />
	</Layout>
);

export default renderHomepageScreen;
