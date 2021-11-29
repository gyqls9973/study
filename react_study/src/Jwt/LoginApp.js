import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from "../JwtComponent/LoginComponent";
import WelcomeComponent from "../JwtComponent/WelcomComponent";
import LogoutComponent from "../JwtComponent/LogoutComponent";
import ErrorComponent from "../JwtComponent/ErrorComponent";
import FooterComponent from "../JwtComponent/FooterComponent";
import JwtHeaderComponent from "../JwtComponent/JwtHeaderComponent";
import CreateBoardComponent from "../BoardComponents/CreateBoardComponent";
import UpdateBoardComponent from "../BoardComponents/UpdateBoardComponent";

function LoginApp() {
    return (
      <div className="TodoApp">
        <Router>
          <div>
            <JwtHeaderComponent/>
            <Switch>
              <Route path="/" exact={true} component={LoginComponent}/>
              <Route path="/login" exact={true} component={LoginComponent}/>
              <Route path="/create_boards/" exact={true} component={CreateBoardComponent} />
              <Route path="/update_boards/:boardid" exact={true} component={UpdateBoardComponent}/>
              <Route path="/welcome/:name" exact={true} component={WelcomeComponent}/>
              <Route path="/logout" exact={true} component={LogoutComponent}/>
              <Route exact={true} component={ErrorComponent}/>
            </Switch>
            <FooterComponent/>
          </div>
        </Router>
      </div>
    )
}

export default LoginApp