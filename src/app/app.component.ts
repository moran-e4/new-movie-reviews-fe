import { Component } from '@angular/core';
import { MoviesComponent } from './movies.component';
import jsonData from '../assets/titlesplaceholder.json';

@Component({
  selector: 'app-root',
  imports: [MoviesComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit() {
    console.log(jsonData);
  }
}
