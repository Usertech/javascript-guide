import React from 'react';

const InputTextField = ({ type, input, meta }) => (
	<div>
		<input type={type} {...input} />
		{meta.error && meta.touched && meta.submitFailed && (
			<div>{meta.error}</div>
		)}
	</div>
);

export default InputTextField;
