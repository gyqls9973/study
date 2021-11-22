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

    getBoardsById(boardid) {
        return axios.get(Board_API_BASE_URL + "/" + boardid);
    }

    updateBoards(state, boardid) {
        return axios.put(Board_API_BASE_URL + "/" + boardid, state);
    }

    deleteBoards(boardid) {
        return axios.delete(Board_API_BASE_URL + "/" + boardid);
    }

}

export default new BoardService();