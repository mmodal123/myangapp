import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { BookService } from './book.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sahosoft Solutions';

 datasaved = false;
 bookForm: FormGroup;
 allbooks: Observable<Book[]>;


constructor(private formbuilder: FormBuilder , private _bookService: BookService) {}

  ngOnInit() {

    this.bookForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      writer: ['', [Validators.required]],

    });

    this.getSoftBooks();
  }

  onFormSubmit() {
    this.datasaved = false;
    let book = this.bookForm.value;
    this.createbooks(book);
    this.bookForm.reset();
  }

  createbooks(book: Book) {
    this._bookService.createBook(book).subscribe(
      book => {
        this.datasaved = true;
        this.getSoftBooks();

      }
    )
  }

  getSoftBooks() {
    this.allbooks = this._bookService.getBooksFromStore();
  }


}
