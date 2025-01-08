import jsonData from '../assets/titlesplaceholder.json';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
})
export class DataService {

  pageSize: number = 3;

  constructor(private http: HttpClient) {}

  getMovies(page: number) {
    let pageStart = (page -1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize;
    return jsonData.slice(pageStart, pageEnd);
  }

  getLastPageNumber() {
    return Math.ceil(jsonData.length / this.pageSize);
  }

  getMovie(id: any) {
    let dataToReturn: any[] = [];
    jsonData.forEach( function(movie) {
      if (movie['tconst'] == id) {
        dataToReturn.push(movie);
      }
    })
    return dataToReturn;
  }

  getLoremIpsum(paragraphs: number): Observable<any> {
    let API_key = 'JdAi+z3F0u9revjwcjRrvA==tJMmOOGu4vuw9qu0';
    return this.http.get<any>(
      'https://api.api-ninjas.com/v1/loremipsum?paragraphs=' + paragraphs, {headers: {'X-Api-Key': API_key}}
    );
  }

}
