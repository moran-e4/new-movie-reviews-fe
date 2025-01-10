import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * Movie Review Web Service
 * This service is responsible for making HTTP requests to the movie API
 * */
@Injectable()
export class WebService {

  /**
   * Default number of elements returned per page
   * */
  pageSize: number = 12;

  /**
   * Constructor
   * @param http The HTTP client to make requests
   * */
  constructor(private http: HttpClient) { }


  /**
   * Retrieve all movies from the movie API database
   * */
  getAllMovies() {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies');
  }

  /**
    * Retrieve movies from the movie API database
   * @param page The page number to get
   * @returns The movies on the page number
   * */
  getMovies(page: number) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies?pn=' + page + '&ps=' + this.pageSize);
  }

  /**
   * Retrieve a single movie from the movie API database
   * @param id Return single movie by id
   * */
  getMovie(id: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies/' + id);
  }

  /**
   * Retrieve reviews for a single movie from the movie API database
   * @param id Return reviews for a single movie by id
   * */
  getReviews(id: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies/' + id + '/reviews');
  }

  /**
   * Post a review to the movie API database
   * @param id Post reviews for a single movie by id
   * @param review the review to post
   * */
  postReview(id: any, review: any) {
    let postData = new FormData();
    postData.append("username", review.username);
    postData.append("comment", review.comment);
    postData.append("rating", review.rating);
    return this.http.post<any>(
      'http://127.0.0.1:5000/api/v1.0/movies/' + id + '/reviews', postData);
  }

  /**
   * Retrieve ratings for a single movie from the movie API database
   * @param tconst Return ratings for a single movie by tconst
   * */
  getRatings(tconst: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/ratings/tconst/' + tconst);
  }

  /**
   * Retrieve movies organized by genre from the movie API database
   * @param genre Returns movies by genre
   * */
  getGenre(genre: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies/genre/' + genre);
  }

  getSearch(search: any) {
    return this.http.get<any>(
      'http://127.0.0.1:5000/api/v1.0/movies/search/' + search)
  }
}
