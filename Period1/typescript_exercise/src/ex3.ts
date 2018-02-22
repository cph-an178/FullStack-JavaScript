interface i_book {
    title: string;
    readonly author: string;
    published?: Date;
    pages?: number;
}

let book1: i_book = {title:"Harry Potter 1", author:"J.K. Rolling", published:new Date('December 10, 1990 00:00:00'), pages:520};
let book2: i_book = {title:"Harry Potter 2", author:"J.K. Rolling"};

function print_book(book: i_book): void {
    
    console.log(`
    **********
    Title:              ${book.title}
    Author:             ${book.author}
    Published date:     ${book.published}
    Number of pages:    ${book.pages}
    **********`)

    // book.author = "Another one" Wont work because author is read only

}

print_book(book1);
print_book(book2);

/* If it looks like a duck and quacks like a duck its a duck */

class Book {
    private title: string;
    private author: string;
    private published: Date;
    private pages: number;
    constructor(title: string, author: string, published: Date, pages: number) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    get getTitle(): string {
        return this.title;
    }
    get getAuthor(): string {
        return this.author;
    }
    get getPublished(): Date {
        return this.published;
    }
    get getPages(): number {
        return this.pages;
    }

    // If you didn't create a setter for author it would be the same as readonly 
}

let book3: Book = new Book("Harry Potter 3", "J.K. Rolling", new Date('December 10, 1995 00:00:00'), 604);

function print_book2(book: Book): void {
    
    console.log(`
    **********
    Title:              ${book.getTitle}
    Author:             ${book.getAuthor}
    Published date:     ${book.getPublished}
    Number of pages:    ${book.getPages}
    **********`)

    // book.author = "Another one" Wont work because author is read only

}

print_book2(book3);

