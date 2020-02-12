import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './component/layout/Home';
import UserHomePage from './component/layout/UserHomePage';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={UserHomePage}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;
