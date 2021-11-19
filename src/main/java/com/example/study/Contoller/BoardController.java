package com.example.study.Contoller;

import com.example.study.api.Repository.BoardRepository;
import com.example.study.api.Service.BoardService;
import com.example.study.api.VO.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @Autowired
    private BoardRepository boardRepository;

   @GetMapping("/board")
    public ModelAndView boardList() {
       List<Board> list = boardService.getAllBoard();
       ModelAndView nextView = new ModelAndView("board");
       nextView.addObject("boardList", list);
       return nextView;
   }



    /*@PostMapping("/board")
    public Board create(@RequestBody Board board) {
        return boardRepository.save(board);
    }

    @GetMapping("/board/{board_id}")
    public String read(@PathVariable Integer board_id) {
        Optional<Board> boardOptional = boardRepository.findById(board_id);
        boardOptional.ifPresent(System.out::println);
        return "successfully executed";
    }

   @GetMapping("/main")
    public String Container() {
       return "http://localhost:3000/api/main";
   }*/


}
