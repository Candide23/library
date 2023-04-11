package com.book.library.Model;


import lombok.Data;

@Data
public class AddRequest {


        private String title;

        private String author;

        private String description;

        private int copies;

        private String category;

        private String img;

}
