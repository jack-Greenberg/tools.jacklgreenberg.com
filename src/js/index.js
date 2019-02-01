import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.scss';
import { Window, Controls } from './app.js';

ReactDOM.render(<Window />, document.getElementById('app-display'));
ReactDOM.render(<Controls />, document.getElementById('app-controls'));

$( document ).ready(function() {
  let clipboard = new ClipboardJS('#copy');

  clipboard.on('success', function(e) {
        e.clearSelection();
    });
});
