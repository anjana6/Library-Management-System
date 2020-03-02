import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserLogin from './Component/User/UserLogin';
import Home from './Component/Layout/Home';
import AdminLogin from './Component/Admin/AdminLogin';
import UserRegister from './Component/User/UserRegister';
import AddBooks from './Component/Book/AddBook/AddBooks';
import UserViewBooks from './Component/Book/ViewBook/UserViewBook/UserViewBooks';
import UserNavbar from './Component/Layout/UserNavBar';
import AdminRegister from './Component/Admin/AddminRegister';
import AdminViewBooks from './Component/Book/ViewBook/AdminViewBook/AdminViewBooks';

const App = () => {
    return (
        <Router>
            <Fragment>
                <UserNavbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/user/login' component={UserLogin}/>
                    <Route exact path='/admin/login'component={AdminLogin}/>
                    <Route exact path='/user/register' component={UserRegister}/>
                    <Route exact path='/admin/register' component={AdminRegister}/>
                    <Route exact path='/book/addbook' component={AddBooks}/>
                    <Route exact path='/book/userviewbooks' component={UserViewBooks}/>
                    <Route exact path='/book/adminviewbooks' component={AdminViewBooks}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;
