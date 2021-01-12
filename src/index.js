import './index.css';
import React from 'react';
import {render} from 'react-dom';
import SocialNetwork from './App';
import { HashRouter } from 'react-router-dom';

render(
    <HashRouter>
        <SocialNetwork />
    </HashRouter>,
    document.getElementById('root')
);
