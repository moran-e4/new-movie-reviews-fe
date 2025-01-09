import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie.component';
import {GenresComponent} from './genres.component';
import {GenreComponent} from './genre.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/:_id',
    component: MovieComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'genre/:genreId',
    component: GenreComponent
  }
];
