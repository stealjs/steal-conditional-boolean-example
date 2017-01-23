import React from 'react';
import ReactDOM from 'react-dom';

// import the app component
import App from './app';

// conditionally import the Intl API only if needed
import 'intl#?requires-polyfill';

let today = new Intl.DateTimeFormat().format(new Date());

ReactDOM.render(
	<App today={today} />,
	document.getElementById('app')
);
