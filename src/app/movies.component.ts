import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'movies',
  imports: [RouterOutlet],
  templateUrl: './movies.component.html',
  standalone: true,
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies_list = [
    {
      "name" : "The Shawshank Redemption",
      "year" : "1994",
      "rating" : "6.3"
    },
    {
      "name" : "Cinema Paradiso",
      "year" : "1954",
      "rating" : "3.3"
    },
    {
      "name" : "American History X",
      "year" : "1964",
      "rating" : "4.3"
    }
    ];
}
