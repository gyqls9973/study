import React from "react";
import ListBoardComponent from "./Components/ListBoardComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import CreateBoardComponent from "./Components/CreateBoardComponent";

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <div className="container">
                <Switch>
                    <Route exact={true} path="/" component={ListBoardComponent}></Route>
                    <Route exact={true} path="/boards" component={ListBoardComponent}></Route>
                    <Route exact={true} path="/create_boards" component={CreateBoardComponent}></Route>
                    <ListBoardComponent />
                </Switch>
            </div>
            <FooterComponent />
        </BrowserRouter>
    );
}

export default App;