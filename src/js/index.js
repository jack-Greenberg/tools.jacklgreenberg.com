import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.scss';
import './app.js';
import './words.min.js';
import { Window, Controls, Settings } from './app-ui.js';

ReactDOM.render(<Window />, document.getElementById('app-display'));
ReactDOM.render(<Controls />, document.getElementById('app-controls'));
ReactDOM.render(<Settings />, document.getElementById('app-settings'));
