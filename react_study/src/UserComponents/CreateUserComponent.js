import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import UserService from "../Service/UserService";

const CreateUserComponent = () => {
    const [state, setState] = useState({
        userid: '',
        password: '',
    });

    let history = useHistory();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        setState({
            userid: state.userid,
            password: state.password,
        });
        console.log("state =>" + JSON.stringify(state));
        UserService.createUser(state).then((res) => {
          history.push("/users");
        })
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">User Join</h3>
                        <div className="card-body">
                            <form onSubmit={handleOnClick}>
                                <div className="form-group">
                                    <label>User ID</label>
                                    <input type="text" placeholder="ID를 입력하세요" name="userid"
                                           className="form-control" value={state.userid}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>User PW</label>
                                    <input type="password" placeholder="PW를 입력하세요" name="password"
                                           className="form-control" value={state.password}
                                           onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success">Join</button>&nbsp;&nbsp;
                                <button className="btn btn-danger">Cancel</button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};


export default CreateUserComponent;