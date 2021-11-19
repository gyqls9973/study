import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="users" className="navbar-brand">User App</a>
                        <a href="boards" className="navbar-brand">Board App</a>
                    </div>
                </nav>
            </header>
            
        </div>
    );
};

export default HeaderComponent;