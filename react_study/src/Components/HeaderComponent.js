import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = (user) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <h1>{user.name}</h1>
                        <a className="navbar-brand" href="/">User App</a>
                        <a className="navbar-brand" href="/boards">Board App</a>
                    </div>
                </nav>
            </header>
            
        </div>
    );
};

export default HeaderComponent;