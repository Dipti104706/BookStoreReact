import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ResetPassword from '../resetPassword/ResetPassword';
import SigninSignup from '../signinSignup/SigninSignup';

function RouterDom() {
    return (
        <Router>
             <Switch>
                  <Route path = "/" exact component = {SigninSignup}/>
                  <Route path = "/forgotpassword" component = {ResetPassword}/>
             </Switch>
        </Router>
    )
}

export default RouterDom
