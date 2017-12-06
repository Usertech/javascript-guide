import { graphql, print } from 'graphql';
import swaggerGraphqlSchema from 'swagger-graphql-schema';
import store from 'store2';
import { OAUTH_TOKEN_STORAGE_KEY } from '../constants';

import { reduce, isPlainObject, mapValues, map, isArray } from 'lodash';

const findFiles = (obj, path) => {
	if (!isArray(obj) && !isPlainObject(obj)) {
		return {};
	}

	return reduce(
		obj,
		(acc, value, key) => {
			const finalPath = `${path ? `${path}.` : ''}${key}`;

			if (value instanceof File) {
				return {
					...acc,
					[finalPath]: value,
				};
			}

			return {
				...acc,
				...findFiles(value, finalPath),
			};
		},
		{}
	);
};

const replaceFiles = (obj, path) => {
	const replace = (value, key) => {
		const finalPath = `${path ? `${path}.` : ''}${key}`;

		if (value instanceof File) {
			return {
				name: value.name,
				type: value.type,
				size: value.size,
				path: finalPath,
			};
		}

		return replaceFiles(value, finalPath);
	};

	if (isPlainObject(obj)) {
		return mapValues(obj, replace);
	} else if (isArray(obj)) {
		return map(obj, replace);
	}

	return obj;
};

const createSwaggerNetworkInterface = ({ swagger }) => {
	const schema = swaggerGraphqlSchema(swagger);
	return {
		query(request) {
			const { tokenType, accessToken } =
				store.get(OAUTH_TOKEN_STORAGE_KEY) || {};

			return graphql(
				schema,
				print(request.query),
				{},
				{
					http: {
						headers: accessToken
							? { Authorization: `${tokenType} ${accessToken}` }
							: {},
					},
					files: findFiles(request.variables),
				},
				replaceFiles(request.variables),
				// request.variables,
				request.operationName
			);
		},
	};
};

export default createSwaggerNetworkInterface;
