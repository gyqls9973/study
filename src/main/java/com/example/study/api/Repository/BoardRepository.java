package com.example.study.api.Repository;

import com.example.study.api.VO.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer> {

}