import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'movie',
  providers: [DataService],
  templateUrl: './movie.component.html',
  standalone: true,
  styleUrl: './movie.component.css',
  imports: [
    RouterOutlet,
    CommonModule
  ],
})
export class MovieComponent {

  movies_list: any;

  constructor( public dataService: DataService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.movies_list = this.dataService.getMovie(
      this.route.snapshot.paramMap.get('tconst'));
  }
}
