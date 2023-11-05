import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookApiResponse } from '../interface/response.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(query: string): Observable<BookApiResponse> {
    return this.http.get<BookApiResponse>(`${environment.url}?q=${query}&maxResults=12`)
  }

}
