import './index.css';
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
