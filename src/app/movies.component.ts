import { Component } from '@angular/core';
import { DataService } from './data.service';
import { RouterLink } from '@angular/router';
import { WebService } from './web.service';

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

  movies_list: any;
  page: number = 1;
  ratings: { [key: string]: number } = {};

  constructor(public dataService: DataService,
              public webService: WebService) {}

  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
    }
    this.webService.getMovies(this.page).subscribe((response) => {
      this.movies_list = response;
      this.loadRatings();
    })
  }

  loadRatings(): void {
    this.movies_list.forEach((movie: any) => {
      this.webService.getRatings(movie.tconst).subscribe((rating) => {
        this.ratings[movie.tconst] = rating.averageRating;
      })
    });
  }

  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage['page'] = this.page;
      this.webService.getMovies(this.page).subscribe((response) => {
        this.movies_list = response;
      })
    }
  }
  nextPage() {
    if (this.page < this.dataService.getLastPageNumber()){
      this.page = this.page + 1;
      sessionStorage['page'] = this.page;
      this.webService.getMovies(this.page).subscribe((response) => {
        this.movies_list = response;
      })        }
  }
}
