package com.example.study.api.Repository;

import com.example.study.api.VO.UserVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserVO, Long> {
}