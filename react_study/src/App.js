import React from "react";
import ListBoardComponent from "./Components/ListBoardComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import CreateBoardComponent from "./Components/CreateBoardComponent";
import UpdateBoardComponent from "./Components/UpdateBoardComponent";
import ListUserComponent from "./UserComponents/ListUserComponent";
import CreateUserComponent from "./UserComponents/CreateUserComponent";

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <div className="container">
                <Switch>
                    <Route exact={true} path="/" component={ListUserComponent}/>
                    <Route exact={true} path="/users" component={ListUserComponent}/>
                    <Route exact={true} path="/create_users" component={CreateUserComponent} />
                    <Route exact={true} path="/boards" component={ListBoardComponent} />
                    <Route exact={true} path="/create_boards" component={CreateBoardComponent} />
                    <Route exact={true} path="/update_boards/:boardid" component={UpdateBoardComponent} />
                    <ListBoardComponent />
                </Switch>
            </div>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;