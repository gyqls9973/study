import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from "../Service/AuthenticationService";

function AuthenticatedRoute(props) {
    if(AuthenticationService.isUserLoggedIn()) {
      return <Route {...props}/>
    } else {
      return <Redirect to="/"/>
    }

}

export default AuthenticatedRoute