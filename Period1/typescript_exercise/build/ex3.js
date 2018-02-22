"use strict";
var book1 = { title: "Harry Potter 1", author: "J.K. Rolling", published: new Date('December 10, 1990 00:00:00'), pages: 520 };
var book2 = { title: "Harry Potter 2", author: "J.K. Rolling" };
function print_book(book) {
    console.log("\n    **********\n    Title:              " + book.title + "\n    Author:             " + book.author + "\n    Published date:     " + book.published + "\n    Number of pages:    " + book.pages + "\n    **********");
    // book.author = "Another one" Wont work because author is read only
}
print_book(book1);
print_book(book2);
/* If it looks like a duck and quacks like a duck its a duck */
var Book = /** @class */ (function () {
    function Book(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    Object.defineProperty(Book.prototype, "getTitle", {
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getAuthor", {
        get: function () {
            return this.author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getPublished", {
        get: function () {
            return this.published;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getPages", {
        get: function () {
            return this.pages;
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());
var book3 = new Book("Harry Potter 3", "J.K. Rolling", new Date('December 10, 1995 00:00:00'), 604);
function print_book2(book) {
    console.log("\n    **********\n    Title:              " + book.getTitle + "\n    Author:             " + book.getAuthor + "\n    Published date:     " + book.getPublished + "\n    Number of pages:    " + book.getPages + "\n    **********");
    // book.author = "Another one" Wont work because author is read only
}
print_book2(book3);
//# sourceMappingURL=c:/Users/alexa/Documents/Datamatiker/Semester4/JavaScript/Period1/typescript_exercise/build/ex3.js.map