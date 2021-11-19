package com.example.study.api.VO;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user")
public class UserVO {

    @Column(name = "userid")
    private String userid;

    @Column(name = "password")
    private String password;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long num;

    public void UserVO(String userid, String password) {
        this.userid = userid;
        this.password = password;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getNum() {
        return num;
    }

    public void setNum(long num) {
        this.num = num;
    }
}