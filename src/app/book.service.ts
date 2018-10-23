import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';

@Injectable()
export class BookService {
  bookUrl = '/api/books';

  constructor(private _http: HttpClient) { }

  getBooksFromStore(): Observable<Book[]> {
    return this._http.get<Book[]>(this.bookUrl);
  }

}
