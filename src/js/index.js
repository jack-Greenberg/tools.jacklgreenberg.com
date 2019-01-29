import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.scss';
import { Phrases, Window, Controls, Settings } from './app.js';

ReactDOM.render(<Window />, document.getElementById('app-display'));
ReactDOM.render(<Controls />, document.getElementById('app-controls'));
ReactDOM.render(<Settings />, document.getElementById('app-settings'));
