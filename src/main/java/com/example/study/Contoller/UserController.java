package com.example.study.Contoller;

import com.example.study.api.Repository.UserRepository;
import com.example.study.api.VO.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http:localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<UserVO> getAllUser() {return userRepository.findAll();}

    @PostMapping("/users")
    public UserVO createUser(@RequestBody UserVO userVO) {
        return userRepository.save(userVO);
    }

}