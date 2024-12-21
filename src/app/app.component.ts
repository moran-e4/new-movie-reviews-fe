import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-movie-review-fe';
}
