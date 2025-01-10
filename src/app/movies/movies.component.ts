import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { RouterLink } from '@angular/router';
import { WebService } from '../services/web.service';

/**
 * Component for displaying a list of movies.
 * It provides pagination and fetches movie data using a web service.
 */
@Component({
  selector: 'movies',
  providers: [DataService, WebService],
  templateUrl: './movies.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  /**
   * List of movies.
   */
  movies_list: any;
  /**
   * Current page number for pagination.
   */
  page: number = 1;
  /**
   * Ratings for the movies.
   */
  ratings: { [key: string]: number } = {};

  /**
   * Constructor to inject necessary services.
   * @param dataService Service to handle data operations.
   * @param webService Service to fetch data from the api.
   */
  constructor(public dataService: DataService,
              public webService: WebService) {}

  /**
   * It fetches the movies and loads their ratings.
   */
  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
    }
    this.webService.getMovies(this.page).subscribe((response) => {
      this.movies_list = response;
      this.loadRatings();
    })
  }

  /**
   * Loads ratings for the movies.
   */
  loadRatings(): void {
    this.movies_list.forEach((movie: any) => {
      this.webService.getRatings(movie.tconst).subscribe((rating) => {
        this.ratings[movie.tconst] = rating.averageRating;
      })
    });
  }

  /**
   * Navigates to the previous page and fetches the movies for that page.
   */
  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage['page'] = this.page;
      this.webService.getMovies(this.page).subscribe((response) => {
        this.movies_list = response;
        this.loadRatings();
      })
    }
  }
  /**
   * Navigates to the next page and fetches the movies for that page.
   */
  nextPage() {
    if (this.page < this.dataService.getLastPageNumber()){
      this.page = this.page + 1;
      sessionStorage['page'] = this.page;
      this.webService.getMovies(this.page).subscribe((response) => {
        this.movies_list = response;
        this.loadRatings();
      })
    }
  }
}
