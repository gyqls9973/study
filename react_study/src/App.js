import React from "react";
import {BrowserRouter} from "react-router-dom";
import LoginApp from "./Jwt/LoginApp";

function App() {

    return (
        <BrowserRouter>
          <div>
            <LoginApp />
          </div>
        </BrowserRouter>
    );
}

export default App;