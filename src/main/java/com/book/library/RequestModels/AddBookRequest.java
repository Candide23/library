package com.book.library.RequestModels;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
public class AddBookRequest {

    private String title;

    private String author;

    private String description;

    private int copies;

    private String category;

    private String img;
}
