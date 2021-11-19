package com.example.study.Contoller;

import com.example.study.api.VO.UserVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://61.80.148.51:3000")
public class ReactController {


    @GetMapping("/hello")
    public List<String> hello() {
        return Arrays.asList("dkdkdkdk", "Hello World");
    }


    @Autowired
    SqlSession sqlSession;

    @PostMapping("/api/ip")
    public HashMap ip (@RequestBody Map loginInfo) {
        String userid = (String) loginInfo.get("userid"); //DB
        String password = (String) loginInfo.get("password");

        UserVO vo = sqlSession.selectOne("logmain","asdasd");
        System.out.println(userid);
        System.out.println(password);
        System.out.println("@@@@@" + vo);

        HashMap map = new HashMap();
        map.put("asdfasdfs", "hi");
        return map;
        }

}
