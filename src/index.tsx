import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {initialize} from './ExecutionFlow';
import {http} from "./Network";
import "./ExecutionInput/lib/css/executionInput.min.css"

initialize(http);
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
