import React from 'react';
import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/api/v1/users"

function UserService() {

    const getUsers = () => {
        return axios.get(USER_API_BASE_URL);
    }

}

export default new UserService()