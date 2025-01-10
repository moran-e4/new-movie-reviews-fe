import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule} from '@angular/google-maps';
import { ReactiveFormsModule} from '@angular/forms';
import { WebService} from '../services/web.service';
import { RouterLink } from '@angular/router';

/**
 * Component for displaying movies by genre.
 */
@Component({
  selector: 'genre',
  templateUrl: './genre.component.html',
  standalone: true,
  styleUrl: './genre.component.css',
  imports: [    RouterOutlet,
    CommonModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    RouterLink],
  providers: [DataService, WebService]
})

export class GenreComponent {

  /**
   * List of movies in the selected genre.
   */
  genre_movie_list: any;
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
   * @param webService Service to fetch data from the web.
   * @param route ActivatedRoute to access route parameters.
   */
  constructor(public dataService: DataService,
              public webService: WebService,
              private route: ActivatedRoute,
  ) {}

  /**
   * Hook fetches the genre movies and loads their ratings.
   */
  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
    }
    this.webService.getGenre(this.route.snapshot.paramMap.get('genreId'))
      .subscribe((response) => {
        this.genre_movie_list = response;
        this.loadRatings();
        console.log(this.route.snapshot.paramMap.get('genreId'));
        console.log(response)
  });
  }

  /**
   * Loads ratings for the movies in the genre.
   */
  loadRatings(): void {
    this.genre_movie_list.forEach((movie: any) => {
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
        this.genre_movie_list = response;
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
        this.genre_movie_list = response;
        this.loadRatings();
      })
    }
  }
}
