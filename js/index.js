require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="Board 1" list1="List 1" list2="List 2" list3="List 3" />, document.getElementById('app'))
);
