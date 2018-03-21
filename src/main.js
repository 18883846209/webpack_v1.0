import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Component from './react';

render(<Component />,document.getElementById('test')); // eslint-disable-line