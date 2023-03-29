package com.book.library.Controllers;

import com.book.library.Model.Book;
import com.book.library.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;



    @GetMapping("/secure/currentloans/count")
    public int currentLoansCount(@RequestHeader(value = "Authorization") String token ) {

        String userEmail = "testuser@email.com";
        return bookService.currentLoansCount(userEmail);

    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook(@RequestHeader(value = "Authorization") String token,
                             @RequestParam Long bookId) throws Exception {

        String userEmail = "testuser@email.com";
        return bookService.checkoutBook(userEmail, bookId);

    }

    @GetMapping("/secure/ischeckedout/byuser")
    public Boolean checkoutBookByUser(@RequestParam Long bookId) {

        String userEmail = "testuser@email.com";
        return bookService.checkoutBookByUser(userEmail, bookId);
    }

}
