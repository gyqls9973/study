import React, {useEffect, useState} from 'react';
import {Redirect, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signIn} from "../Auth";

const ListUserComponent = (props, login, authenticated, location) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        try {
            signIn({email, password})
            console.log(email, password)
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password)
            console.log(sessionStorage.getItem('email'));
            console.log(sessionStorage.getItem('password'));
            history.push("/board")
        } catch (e) {
            alert('Failed to login');
            setEmail('');
            setPassword('');
        }
    };

    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if(sessionStorage.getItem('email') === null) {
            console.log('isLogin ?? :: ', isLogin)
        } else {
            setIsLogin(true)
            console.log('isLogin ?? :: ', isLogin)
        }
    })

    const handleBtn = () => {
        history.push("/create_users");
    }

    return(
    <div>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">User Login</h3>
                    <div className="card-body">
                        <form onSubmit={handleClick}>
                            <div className="form-group">
                                <label>User ID</label>
                                <input placeholder="ID를 입력하세요" name="userid"
                                       className="form-control" value={email}
                                       onChange={({target: {value}}) => setEmail(value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>User PW</label>
                                <input placeholder="PW를 입력하세요" name="password"
                                       className="form-control" value={password}
                                       onChange={({target: {value}}) => setPassword(value)} type="password"
                                />
                            </div>
                            <button type="submit" className="btn btn-success">Login</button>&nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={handleBtn}>Join</button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    </div>
);
};

export default ListUserComponent;