package com.example.study.api.VO;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Table;

@Data
@Table(name = "board")
public class BoardVO {
    private int board_id;
    @Column(name = "title")
    private String title;
    private String content;
    private String deleteYn;

    public void BoardVO(int board_id, String title, String content, String deleteYn) {
        this.board_id = board_id;
        this.title = title;
        this.content = content;
        this.deleteYn = deleteYn;
    }

    public int getBoard_id() {
        return board_id;
    }

    public void setBoard_id(int board_id) {
        this.board_id = board_id;
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

    public String getDeleteYn() {return deleteYn;}

    public void setDeleteYn(String deleteYn) {this.deleteYn = deleteYn;}
}
