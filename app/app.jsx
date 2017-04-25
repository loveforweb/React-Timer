import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory } from 'react-router'
import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

require('style-loader!css-loader!sass-loader!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown} />
            <IndexRoute component={Timer} />
        </Route>
    </Router>,
    document.getElementById('app') 
)