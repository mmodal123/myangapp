import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BookService } from './book.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TestData} from './testdata';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
