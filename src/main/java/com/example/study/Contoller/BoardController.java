package com.example.study.Contoller;

import com.example.study.api.Repository.BoardRepository;
import com.example.study.api.VO.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
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

}
