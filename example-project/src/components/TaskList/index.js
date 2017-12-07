import React from 'react';
import { compose } from 'recompose';

import { graphql } from 'react-apollo';
import ALL_TASKS_QUERY from 'queries/allTasks';

import TaskItem from '../TaskItem';

const withTaskList = compose(
	graphql(ALL_TASKS_QUERY, { name: 'allTodosQuery' })
);

const renderTaskList = props => {
	// Handles props not being loaded yet
	if (props.allTodosQuery && props.allTodosQuery.loading) {
		console.log('loading data');
		return <div>Loading...</div>;
	}

	// Handles if server sends back an error
	if (props.allTodosQuery && props.allTodosQuery.error) {
		console.log(props.allTodosQuery.error);
		return <h1> error </h1>;
	}

	// Data received -> renders data
	// Filtring function decides what data to show depending on whether the component has "isDone" prop
	const filtered = props.allTodosQuery.getTodos.filter(
		i => i.isDone === props.isDone
	);

	return (
		<ul className="task-list">
			{filtered.map(i => (
				<li key={i._id}>
					<TaskItem {...i} />
				</li>
			))}
		</ul>
	);
};

export default withTaskList(renderTaskList);
