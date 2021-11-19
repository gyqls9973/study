import React, {useEffect, useState} from 'react';
import UserService from "../Service/UserService";
import {useDispatch, useSelector} from "react-redux";
import {userRemove, userSave, userSelectRow} from "../Module/UserReducer";

function ListUserComponent() {
    const [inputData, setInputData] = useState({
        userid: '',
        password: '',
        num: 0
    });

    const dispatch = useDispatch();

    const onRemove = (userid) => dispatch(userRemove(userid));
    const onSave = (saveData) => dispatch(userSave(saveData));

    const {selectRowData} = useSelector(state => state.userReducer);

    const onRowClick = (userid) => {
        dispatch(userSelectRow(userid));
        if(JSON.stringify(selectRowData) !== '{}') {
            setInputData({
                userid: selectRowData.userid,
                password: selectRowData.password,
                num: selectRowData.num
            })
        }
    }
    const changeInput = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    const {users} = useSelector(state => state.userReducer);

    useEffect(() => {
        UserService.getUsers().then((res) => {
            setInputData({user: res.data})
        })
    })

    return (
        <div>
            <h2 className="text-center">User List</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>user Userid</th>
                            <th>user Password</th>
                            <th>user Num</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        users.map(
                            row =>
                                <tr key={row.num}>
                                    <td>{row.userid}</td>
                                    <td>{row.password}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListUserComponent;