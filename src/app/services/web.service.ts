import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  pageSize: number = 12;

  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies');
  }

  getMovies(page: number) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies?pn=' + page + '&ps=' + this.pageSize);
  }

  getMovie(id: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies/' + id);
  }

  getReviews(id: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies/' + id + '/reviews');
  }

  postReview(id: any, review: any) {
  let postData = new FormData();
  postData.append("username", review.username);
  postData.append("comment", review.comment);
  postData.append("rating", review.rating);
  return this.http.post<any>(
    'http://127.0.0.1:5000/api/v1.0/movies/' + id + '/reviews', postData);
  }

  getRatings(tconst: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/ratings/tconst/' + tconst);
  }

  getGenre(genre: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies/genre/' + genre);
  }
}