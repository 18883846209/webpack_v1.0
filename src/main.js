// import Vue from 'vue';
// import App from './App.vue';

// new Vue({ // eslint-disable-line
// 	el: '#test',
// 	render: h => h(App)
// });
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Component from './react';

render(<Component />,document.getElementById('test')); // eslint-disable-line