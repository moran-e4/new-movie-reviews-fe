import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MoviesComponent } from '../movies/movies.component';
import { MovieComponent } from '../movie/movie.component';
import {GenresComponent} from '../genres/genres.component';
import {GenreComponent} from '../genre/genre.component';
import {TestsComponent} from '../../testing/tests.component';
import {SearchComponent} from '../search/search.component';
import {NameSearchComponent} from '../name/name.component';

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
  },
  {
    path: 'test',
    component: TestsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'nameSearch',
    component: NameSearchComponent
  }
];
