package com.example.study.api.DAO;

import com.example.study.api.VO.UserVO;

import java.util.List;

public interface UserDAO {
    List<UserVO> selectUsers(UserVO param) throws Exception;
}
