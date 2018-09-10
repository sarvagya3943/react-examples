import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'typeface-roboto'
import { createStore } from 'redux'

const store = createStore(() => { })

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
