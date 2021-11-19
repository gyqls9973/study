package com.example.study.api.Service;

import com.example.study.api.Repository.BoardRepository;
import com.example.study.api.VO.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<Board> getAllBoard() {
        List<Board> list = boardRepository.findAll();
        return list;
    }
}
