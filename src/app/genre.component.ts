
import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule} from '@angular/google-maps';
import { ReactiveFormsModule} from '@angular/forms';
import { WebService} from './web.service';
import { RouterLink } from '@angular/router';




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

  genre_movie_list: any;
  page: number = 1;
  ratings: { [key: string]: number } = {};

  constructor(public dataService: DataService,
              public webService: WebService,
              private route: ActivatedRoute,
  ) {}

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

  loadRatings(): void {
    this.genre_movie_list.forEach((movie: any) => {
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
        this.genre_movie_list = response;
        this.loadRatings();

      })
    }
  }
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
