import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.scss';
import { Window, Input } from './app.js';

ReactDOM.render(<Window />, document.getElementById('app-display'));
ReactDOM.render(<Input />, document.getElementById('app-controls'));
