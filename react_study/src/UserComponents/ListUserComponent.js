import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import UserService from "../Service/UserService";

const ListUserComponent = (props) => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleIdChange = (e) => {
        setUserid(e.target.value);
    }

    const handlePwChange = (e) => {
        setPassword(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(userid, password);
        }

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
                        <form onSubmit={handleOnSubmit}>
                            <div className="form-group">
                                <label>User ID</label>
                                <input placeholder="ID를 입력하세요" name="userid"
                                       className="form-control" value={userid}
                                       onChange={handleIdChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>User PW</label>
                                <input placeholder="PW를 입력하세요" name="password"
                                       className="form-control" value={password}
                                       onChange={handlePwChange} type="password"
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