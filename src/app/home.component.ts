import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { WebService} from './web.service';
import { AgGridAngular} from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  imports: [RouterOutlet, AgGridAngular],
  providers: [WebService]
})

export class HomeComponent {

  headings: ColDef[] =[
    { field: "primaryTitle" },
    { field: "startYear" },
    { field: "titleType" },
    { field: "ratings" }
  ]

  data: any = [];
  ratings: { [key: string]: number } = {};

  constructor(private webService: WebService) {}

  ngOnInit() {
    this.webService.getAllMovies()
      .subscribe(
        (response) => {
          this.data = response;
          this.loadRatings();
          console.log(response)
        });
  }

  loadRatings(): void {
    this.data.forEach((movie: any) => {
      this.webService.getRatings(movie.tconst).subscribe((rating) => {
        this.ratings[movie.tconst] = rating.averageRating;
        movie.ratings = rating.averageRating; // This is where the push happens

      })
    });
  }

  protected readonly ClientSideRowModelModule = ClientSideRowModelModule;
}
