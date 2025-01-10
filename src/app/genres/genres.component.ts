import {WebService} from '../services/web.service';
import {Component} from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'genre',
  templateUrl: './genres.component.html',
  standalone: true,
  styleUrl: './genres.component.css',
  imports: [RouterLink],
  providers: [WebService]
})

export class GenresComponent {
  genres_list = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"] ;
  data: any = [];

}
