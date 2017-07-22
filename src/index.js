import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import data from '../src/constants/data';

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('app')
);
