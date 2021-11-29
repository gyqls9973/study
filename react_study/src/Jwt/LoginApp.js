import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoginComponent from "../Components/LoginComponent";
import WelcomeComponent from "../Components/WelcomComponent";
import LogoutComponent from "../Components/LogoutComponent";
import ErrorComponent from "../Components/ErrorComponent";
import FooterComponent from "../Components/FooterComponent";
import JwtHeaderComponent from "../Components/JwtHeaderComponent";
import CreateBoardComponent from "../Components/CreateBoardComponent";
import UpdateBoardComponent from "../Components/UpdateBoardComponent";

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