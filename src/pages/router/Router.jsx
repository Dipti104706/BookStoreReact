import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
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
             </Switch>
        </Router>
    )
}

export default RouterDom
