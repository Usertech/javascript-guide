// Every language feature used in this project will get transpiled into browser code when you use `re-app-builder`
var logLines = [];

// ES6 import/export
import sum from './sum';
console.log(sum(2, 2));

// generally all ESX features, e.g. object spread. If some syntax doesn't work, it's
const a = { name: 'a', color: 'blue' };
const b = {
	...a,
	name: 'b'
};

console.log(a);
console.log(b);

// generator functions
function *generatorFunction() {

}

// images
import holderImage from './img/example.png';

// react, jsx
import React from 'react';
import ReactDOM from 'react-dom';
var Hello = ({ who }) => {
	return (
		<code>Hello, {who}!</code>
	)
};

ReactDOM.render(
	<div className="example">
		<Hello who="World" /><br />
		<Hello who="Darkness, my old friend" />
		<div>
			<img src={holderImage} alt="Some nonsense" />
		</div>
		<div className="example-image" />
	</div>,
	document.getElementById('root')
);

// Sass
import './styles/index.sass';

// TODO
