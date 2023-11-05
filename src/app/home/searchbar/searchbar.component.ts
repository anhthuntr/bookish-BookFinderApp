import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Book } from 'src/app/interface/book.model';
import { BookService } from 'src/app/service/book.service';
import { BookInfo } from 'src/app/interface/bookInfo.interface';
import { BookApiResponse } from 'src/app/interface/response.interface';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  books: BookInfo[] = [];
  searchQuery: string ='';
  loading: boolean | undefined;
  error: string | undefined;

  constructor(
    private bookService: BookService,
  ) {
  }

  ngOnInit(): void {}

  getBook(query: string) {
    if (query.trim() === '') {
      this.error = 'Please enter a search query.';
      return;
    }

    this.loading = true;
    this.error = undefined;

    this.bookService.getBooks(query)
    .pipe(debounceTime(1000))
    .subscribe(
      (data: BookApiResponse) => {
        this.books = data.items;
        this.loading = false;
      },
      (error) => {
        console.error("Error", error);
        this.error = 'An error occurred while fetching results.';
        this.loading = false;
      }
    )
  }

}
