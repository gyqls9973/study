package com.example.study.Contoller;

import com.example.study.api.Exception.ResourceNotFoundException;
import com.example.study.api.Repository.BoardRepository;
import com.example.study.api.VO.BoardVO;
import com.mysql.cj.log.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @GetMapping("boards")
    public List<BoardVO> getAllBoaard() { return boardRepository.findAll(); }

    @PostMapping("/boards")
    public BoardVO createBoard(@RequestBody BoardVO boardVO) {
        return boardRepository.save(boardVO);
    }

    @GetMapping("/boards/{boardid}")
    public ResponseEntity<BoardVO> getBoardById(@PathVariable Long boardid) {
        BoardVO board = boardRepository.findById(boardid).orElseThrow(() -> new ResourceNotFoundException("Board not exist with boardid :" + boardid));
        return ResponseEntity.ok(board);
    }

}
