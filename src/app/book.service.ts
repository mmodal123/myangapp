import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from './book';

@Injectable()
export class BookService {
  bookUrl = '/api/books';

  constructor(private _http: HttpClient) { }

  getbookbyid(bookid: string) {
    return this._http.get<Book>(this.bookUrl + '/' + bookid);
  }

  createBook(book: Book): Observable<Book> {
    let httpheaders = new HttpHeaders()
    .set('content-Type', 'application/json');
    let options = {
      headers: httpheaders
    };

    return this._http.post<Book>(this.bookUrl, book, options);
  }

  updateBook(book: Book): Observable<number> {
    let httpheaders = new HttpHeaders()
    .set('content-Type', 'application/json');
    let options = {
      headers: httpheaders
    };

    return this._http.put<number>(this.bookUrl + '/' + book.id, book, options);
  }


  getBooksFromStore(): Observable<Book[]> {
    return this._http.get<Book[]>(this.bookUrl);
  }

}
