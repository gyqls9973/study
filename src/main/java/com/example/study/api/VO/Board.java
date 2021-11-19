package com.example.study.api.VO;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Getter
@Setter
@DynamicInsert
@DynamicUpdate
@Table(name = "board")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer board_id;

    @Column(name = "titie")
    private String title;

    @Column(name = "content")
    private String content;
}
