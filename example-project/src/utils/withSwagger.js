import React from 'react';

import { compose, lifecycle, branch, renderNothing } from 'recompose';
import SwaggerParser from 'swagger-parser';

const yaml = require('!!json-loader!yaml-loader!./swagger.yaml');

export default () => {
	return compose(
		lifecycle({
			componentDidMount() {
				const setSwagger = this.props.setSwagger;

				SwaggerParser.dereference(
					yaml // Fetches data from url and parses them. (is a promise)
				).then(setSwagger); // Sets props.swagger to equal the fetched data
			},
		}),

		branch(({ swagger }) => !swagger, renderNothing) // If not yet loaded / error Handler
	);
};
