package com.example.study.api.Repository;

import com.example.study.api.Model.BoardVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<BoardVO, Long> {

}