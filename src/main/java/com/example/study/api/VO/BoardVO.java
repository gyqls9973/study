package com.example.study.api.VO;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "board")
public class BoardVO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardid;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

    public void BoardVO(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public long getBoardid() {
        return boardid;
    }

    public void setBoardid(long boardid) {
        this.boardid = boardid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}