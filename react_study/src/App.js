import React, {useEffect, useState} from "react";
import ListBoardComponent from "./Components/ListBoardComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CreateBoardComponent from "./Components/CreateBoardComponent";
import UpdateBoardComponent from "./Components/UpdateBoardComponent";
import ListUserComponent from "./UserComponents/ListUserComponent";
import CreateUserComponent from "./UserComponents/CreateUserComponent";
import AuthRoute from "./AuthRoute";
import {signIn} from "./Auth";
import Login from "./UserComponents/Login";
import {useSelector} from "react-redux";
import {selectUser} from "./Module/userSlice";
import Logout from "./UserComponents/Logout";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  const state = useSelector(selectUser);




    return (
        <BrowserRouter>
            <HeaderComponent />
            <div className="container">
                <Switch>
                    <Route exact={true} path="/"
                           render={props => (<ListUserComponent authenticated={authenticated} login={login} {...props} />)}
                    />
                    <Route exact={true} path="/create_users" component={CreateUserComponent} />
                    <AuthRoute authenticated={authenticated}
                               exact={true} path="/boards"
                               render={props => <ListBoardComponent user={user} {...props} />}
                    />
                    <Route authenticated={authenticated}
                               exact={true} path="/create_boards"
                               render={props => <CreateBoardComponent user={user} {...props} />}
                    />
                    <Route authenticated={authenticated}
                               exact={true} path="/update_boards/:boardid"
                               render={props => <UpdateBoardComponent user={user} {...props} />}
                    />
                    <ListBoardComponent />
                </Switch>
            </div>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;