import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'movies',
  providers : [DataService],
  templateUrl: './movies.component.html',
  standalone: true,
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

  movies_list: any;
  page: number = 1;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    if (sessionStorage['page']) {
      this.page = Number(sessionStorage['page']);
    }
    this.movies_list = this.dataService.getMovies(this.page);
  }

  previousPage() {
    if (this.page > 1) {
      this.page = this.page - 1;
      sessionStorage['page'] = this.page;
      this.movies_list = this.dataService.getMovies(this.page);
    }
  }
  nextPage() {
    if (this.page < this.dataService.getLastPageNumber()){
      this.page = this.page + 1;
      sessionStorage['page'] = this.page;
      this.movies_list = this.dataService.getMovies(this.page);
    }
  }
}
