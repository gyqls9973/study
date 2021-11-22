import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a className="navbar-brand"><Link to="/users">User App</Link></a>
                        <a className="navbar-brand"><Link to="/boards">Board App</Link></a>
                    </div>
                </nav>
            </header>
            
        </div>
    );
};

export default HeaderComponent;