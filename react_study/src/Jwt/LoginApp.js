import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomComponent";
import LogoutComponent from "./LogoutComponent";
import TestComponent from "./TestComponent";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import JwtHeaderComponent from "./JwtHeaderComponent";
import CreateBoardComponent from "../Components/CreateBoardComponent";
import UpdateBoardComponent from "../Components/UpdateBoardComponent";

class LoginApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <div>
            <JwtHeaderComponent/>
            <Switch>
              <Route path="/" exact component={LoginComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/create_boards/" component={CreateBoardComponent} />
              <Route path="/update_boards/:boardid" component={UpdateBoardComponent}/>
              <Route path="/welcome/:name" component={WelcomeComponent}/>
              <Route path="/logout" component={LogoutComponent}/>
              <Route path="/test" component={TestComponent}/>
              <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent/>
          </div>
        </Router>
      </div>
    )
  }
}

export default LoginApp