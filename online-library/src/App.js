import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import UserLogin from './Component/auth/User/UserLogin';
import Home from './Component/Layout/Home';
import AdminLogin from './Component/auth/Admin/AdminLogin';
import UserRegister from './Component/auth/User/UserRegister';
import AddBooks from './Component/Book/AddBooks';
import UserViewBooks from './Component/Book/ViewBook/UserViewBook/UserViewBooks';
import AdminRegister from './Component/auth/Admin/AddminRegister';
import AdminViewBooks from './Component/Book/ViewBook/AdminViewBook/AdminViewBooks';
import EditBook from './Component/Book/EditBook';
import NotFound from './Component/Layout/NotFound';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/user/login' component={UserLogin}/>
                    <Route exact path='/admin/login'component={AdminLogin}/>
                    <Route exact path='/user/register' component={UserRegister}/>
                    <Route exact path='/admin/register' component={AdminRegister}/>
                    <Route exact path='/book/addbook' component={AddBooks}/>
                    <Route exact path='/book/userviewbooks' component={UserViewBooks}/>
                    <Route exact path='/book/adminviewbooks' component={AdminViewBooks}/>
                    <Route exact path='/book/edit/:id' component={EditBook}/>
                    <Route exact path='/book/delete/:id' component={AddBooks}/>
                    <Route component={NotFound}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;
