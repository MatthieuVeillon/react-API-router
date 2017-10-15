/*
What is this sorcery?? Importing a CSS file in JavaScript?
Make sure you understand what's going on here!!!
*/
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

/*
The App component will get loaded.
*/

ReactDOM.render(<App/>, document.getElementById('root'));
