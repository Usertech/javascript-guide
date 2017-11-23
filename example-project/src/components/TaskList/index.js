import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import TaskItem from '../TaskItem';

const withTaskList = compose(
	connect(
		(state) => ({
			tasks: state.tasks,
		})
	)
);

const renderTaskList = (props) => {
	const { type, tasks: data } = props;
	const tasks = (type === 'active' ? (
		data.filter(item => !item.completed).map(task => (
			<li key={task.id}>
				<TaskItem {...task} />
			</li>
		))
	) : (
		data.filter(item => item.completed).map(task => (
			<li key={task.id}>
				<TaskItem {...task} />
			</li>
		))
	));
	return (
		<ul className="task-list">
			{tasks}
		</ul>
	);
};

export default withTaskList(renderTaskList);
