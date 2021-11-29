import axios from "axios";

const Board_API_BASE_URL = "http://localhost:8081/api/v1/welcome/user_id"
const http = axios.create({
    baseURL: "http://localhost:8081/api/v1",
    headers: {Authorization: `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }
})

class BoardService {
    getBoards() {
        return http.get(Board_API_BASE_URL);
    }

    createBoards(state) {
        return http.post(Board_API_BASE_URL, state)
    }

    getBoardsById(boardid) {
        return http.post(Board_API_BASE_URL + "/" + boardid);
    }

    updateBoards(state, boardid) {
        return http.put(Board_API_BASE_URL + "/upd/" + boardid, state);
    }

    deleteBoards(boardid) {
        return http.delete(Board_API_BASE_URL + "/del/" + boardid);
    }

}

export default new BoardService();