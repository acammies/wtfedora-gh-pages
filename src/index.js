import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.css';
import AppHeader from './components/AppHeader/';
import GitHubFrame from './components/GitHubFrame/';
import LinkedInFrame from './components/LinkedInFrame/';
import Homepage from './components/Homepage/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // <App />, 
    <Router>
        <div>
            <Route path='/' component={AppHeader}/>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/GitHub' component={GitHubFrame}/>
            <Route exact path='/Linkedin' component={LinkedInFrame}/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
