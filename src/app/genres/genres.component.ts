import {WebService} from '../services/web.service';
import {Component} from '@angular/core';
import { RouterLink } from '@angular/router';


/**
 * Component for displaying genres.
 * It provides a list of genres.
 */
@Component({
  selector: 'genre',
  templateUrl: './genres.component.html',
  standalone: true,
  styleUrl: './genres.component.css',
  imports: [RouterLink],
  providers: [WebService]
})

export class GenresComponent {
  /**
   * List of available genres.
   */
  genres_list = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"] ;
  /**
   * Data fetched from the web service.
   */
  data: any = [];

}
