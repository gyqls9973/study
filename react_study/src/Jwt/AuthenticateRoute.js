import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from "../Service/AuthenticationService";

function AuthenticatedRoute() {
    if(AuthenticationService.isUserLoggedIn()) {
      return <Route {...this.props}/>
    } else {
      return <Redirect to="/"/>
    }

}

export default AuthenticatedRoute