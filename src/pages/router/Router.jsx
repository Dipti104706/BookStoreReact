import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Orders from '../../components/orders/Orders';
import PleaseLogin from '../../components/pleaseLogin/PleaseLogin';
import Wishlist from '../../components/wishlist/Wishlist';
import Dashboard from '../dashboard/Dashboard';
import ResetPassword from '../resetPassword/ResetPassword';
import SigninSignup from '../signinSignup/SigninSignup';

function RouterDom() {
    return (
        <Router>
             <Switch>
                  <Route path = "/" exact component = {SigninSignup}/>
                  <Route path = "/forgotpassword" component = {ResetPassword}/>
                  <Route path = "/dashboard" component = {Dashboard}/>
                  <Route path = "/wishlist" component = {Wishlist}/>
                  <Route path = "/orders" component = {Orders}/>
                  <Route path = "/please" component = {PleaseLogin}/>
             </Switch>
        </Router>
    )
}

export default RouterDom
