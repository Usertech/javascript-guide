# React component authoring guidelines


### File naming

File naming should have the following pattern: `ComponentName/index.js`. Do not use `ComponentName.js`, as it's often convenient to have more component-related files in one folder (like styles, images or localization files).


### Functions, not classes

All components should **always** be functions, so no
```javascript
class Example extends React.Component {
	/* component */
}
```
but
```javascript
const Example = () => {
	/* component */
}
```
Don't worry, you can still use lifecycle functions - see HOC section below.


### Higher-Order Components (HOC)

[Recompose everything](https://medium.com/javascript-inside/why-the-hipsters-recompose-everything-23ac08748198). Use [Recompose](https://github.com/acdlite/recompose) library to create HOCs and apply them to your component to add functionality.


### Redux

To connect your component to redux store, use `connect()` HOC from `react-redux` package.

##### Bad example

Unnecessary mental dereferencing, furthermore mapStateToProps is a *parameter name*, not a good name for that actual function.

```javascript
const mapStateToProps = () => {}

compose(
  // other HOCs ...
  connect(mapStateToProps)
  // other HOCs ...
)(App)
```

##### Good
More readable especially in combination with other HOCs.

```javascript
compose(
  // other HOCs ...
  connect(
    () => {}
  )
  // other HOCs ...
)(App)
```


### Simple component example

```javascript
import React from 'react';
import { compose, withHandlers, lifecycle } from 'recompose';

const withExample = compose(
	withHandlers({
		handleClick: () => () => {
			/* handleClick function here */
		},
	}),
	lifecycle({
		componentDidMount() {
			/* Note: lifecycle is the only HOC where you access props on this keyword  */
		},
	})
);

const renderExample = ({ handleClick }) => (
	<div onClick={handleClick}>
		Example component
	</div>
);

export default withExample(renderExample);
```
