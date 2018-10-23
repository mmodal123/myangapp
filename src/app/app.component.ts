import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sahosoft Solutions';
  softBooks: Book[];

  constructor(private _bookService: BookService) {}

  ngOnInit() {
    this.getSoftBooks();
  }

  getSoftBooks() {
    this._bookService.getBooksFromStore().subscribe(books => this.softBooks = books);
  }


}
