import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/api/v1/users"

class UserService {
    //// 해당 페이지 기능 사용 안함
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser(state) {
        return axios.post(USER_API_BASE_URL, state)
    }

    getUserById(num) {
        return axios.get(USER_API_BASE_URL + "/" + num);
    }



}
export default new UserService();