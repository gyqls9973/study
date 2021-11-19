package com.example.study.api.Mapper;

import com.example.study.api.VO.BoardVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    public int insertBoard(BoardVO boardVO);
    public BoardVO selectBoard(int board_id);
    public int deleteBoard(int board_id);
    public List<BoardVO> selectBoardList();
}
