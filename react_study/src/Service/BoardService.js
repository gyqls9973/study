import React from 'react';
import axios from "axios";

const Board_API_BASE_URL = "http://localhost:8081/api/v1/boards"

class BoardService {
    getBoards() {
        return axios.get(Board_API_BASE_URL);
    }

    createBoards(state) {
        return axios.post(Board_API_BASE_URL, state)
    }

}

export default new BoardService();