import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  pageSize: number = 4;

  constructor(private http: HttpClient) { }

  getMovies(page: number) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies?pn=' + page + '&ps=' + this.pageSize);
  }
}
