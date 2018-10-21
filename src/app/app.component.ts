import { Component, OnInit } from '@angular/core';
import {MyservicenameService} from './myservicename.service';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyservicenameService]
})


export class AppComponent implements OnInit {

  title: string;
  softBooks: Book[];
  deptobj: any[];


  constructor(private _bookservice: BookService, private _service: MyservicenameService) {

  }

  ngOnInit() {
    this.deptobj = this._service.dept;
    this.title = this._service.title;
    this.getSoftBooks();
  }

  getSoftBooks() {
    this._bookservice.getBooksFromStore().subscribe(books => this.softBooks = books);
    console.log('Your data is here ' + this.softBooks);

  }


}

