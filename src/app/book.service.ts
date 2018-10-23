import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from './book';

@Injectable()
export class BookService {
  bookUrl = '/api/books';

  constructor(private _http: HttpClient) { }

  createBook(book: Book): Observable<Book> {
    let httpheaders = new HttpHeaders()
    .set('content-Type', 'application/json');
    let options = {
      headers: httpheaders
    };

    return this._http.post<Book>(this.bookUrl, book, options);
  }

  getBooksFromStore(): Observable<Book[]> {
    return this._http.get<Book[]>(this.bookUrl);
  }

}
