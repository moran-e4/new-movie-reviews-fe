import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { WebService} from '../services/web.service';
import { AgGridAngular} from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';

/**
 * Component for displaying the home page.
 * It shows a list of movies in a grid format.
 */
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  imports: [RouterOutlet, AgGridAngular],
  providers: [WebService]
})

export class HomeComponent {

  /**
   * Column definitions for the grid.
   */
  headings: ColDef[] =[
    { field: "primaryTitle" },
    { field: "startYear" },
    { field: "titleType" },
    { field: "ratings" }
  ]

  /**
   * Data fetched from the web service.
   */
  data: any = [];
  /**
   * Ratings for the movies.
   */
  ratings: { [key: string]: number } = {};

  /**
   * Constructor to inject the WebService.
   * @param webService Service to fetch data from the api.
   */
  constructor(private webService: WebService) {}

  /**
   * Hook fetches all movies and loads their ratings.
   */
  ngOnInit() {
    this.webService.getAllMovies()
      .subscribe(
        (response) => {
          this.data = response;
          this.loadRatings();
        });
  }

  /**
   * Loads ratings for the movies.
   */
  loadRatings(): void {
    this.data.forEach((movie: any) => {
      this.webService.getRatings(movie.tconst).subscribe((rating) => {
        this.ratings[movie.tconst] = rating.averageRating;
        movie.ratings = rating.averageRating; // This is where the push happens

      })
    });
  }

  /**
   * Client-side row model module for the grid.
   */
  protected readonly ClientSideRowModelModule = ClientSideRowModelModule;
}
