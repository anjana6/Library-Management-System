import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserLogin from './Component/User/UserLogin';
import Home from './Component/Layout/Home';
import AdminLogin from './Component/Admin/AdminLogin';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/user/login' component={UserLogin}/>
                    <Route exact path='/admin/login'component={AdminLogin}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;
