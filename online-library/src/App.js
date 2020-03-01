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
import ViewBooks from './Component/Book/ViewBook/UserViewBook/ViewBooks';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/user/login' component={UserLogin}/>
                    <Route exact path='/admin/login'component={AdminLogin}/>
                    <Route exact path='/user/register' component={UserRegister}/>
                    {/* <Route exact path='/admin/register' component={AdminRegister}/> */}
                    <Route exact path='/book/addbook' component={AddBooks}/>
                    {/* <Route exact path='/book/viewbooks' component={ViewBooks}/> */}

                    <Route exact path='/book/viewbooks' component={ViewBooks}/>
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;
