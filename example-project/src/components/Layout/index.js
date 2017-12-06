import React from 'react';

const Layout = props => (
	<div className="page-wrap">
		<h1>To-do list</h1>
		{props.children}
	</div>
);

export default Layout;
