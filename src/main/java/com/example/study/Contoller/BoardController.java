package com.example.study.Contoller;

import com.example.study.api.Exception.ResourceNotFoundException;
import com.example.study.api.Repository.BoardRepository;
import com.example.study.api.Model.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api/v1")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @GetMapping(value = "/welcome/user_id")
    public List<BoardVO> getAllBoard() { return boardRepository.findAll(); }

    //게시판 작성
    @PostMapping(value = "/welcome/user_id")
    public BoardVO createBoard(@RequestBody BoardVO boardVO) {
        return boardRepository.save(boardVO);
    }

    //db에 있는 게시판 boardid를 통해 가져오기
    @PostMapping(value = "/welcome/user_id/{boardid}")
    public ResponseEntity<BoardVO> getBoardById(@PathVariable Long boardid) {
       //에러뜰 때 출력
       BoardVO board = boardRepository.findById(boardid).orElseThrow(
            () -> new ResourceNotFoundException("Board not exist with boardid :" + boardid));
       return ResponseEntity.ok(board);
    }

    //게시판 내용 수정
    @PutMapping(value = "/welcome/user_id/upd/{boardid}")
    public ResponseEntity<BoardVO> updateBoard(@PathVariable Long boardid, @RequestBody BoardVO boardDetails) {
        BoardVO board = boardRepository.findById(boardid).orElseThrow(
            () -> new ResourceNotFoundException("Board not exist with boardid :" + boardid)
        );

        board.setTitle(boardDetails.getTitle());
        board.setContent(boardDetails.getContent());

        BoardVO updateBoardVO = boardRepository.save(board);
        return ResponseEntity.ok(updateBoardVO);
    }

    //게시판 내용 삭제
    @DeleteMapping(value = "/welcome/user_id/del/{boardid}")
    public ResponseEntity<Map<String, Boolean>> deleteBoard(@PathVariable Long boardid) {
        BoardVO board = boardRepository.findById(boardid).orElseThrow(
                () -> new ResourceNotFoundException("Board not exist with boardid:" + boardid)
        );

        boardRepository.delete(board);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}