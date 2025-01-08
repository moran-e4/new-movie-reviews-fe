import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule} from '@angular/google-maps';


@Component({
  selector: 'movie',
  providers: [DataService],
  templateUrl: './movie.component.html',
  standalone: true,
  styleUrl: './movie.component.css',
  imports: [
    RouterOutlet,
    CommonModule,
    GoogleMapsModule,
  ],
})
export class MovieComponent {

  movies_list: any;
  movies_lat: any;
  movies_lng: any;
  map_options: google.maps.MapOptions = {};
  map_locations: any[] = [];

  constructor( public dataService: DataService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.movies_list = this.dataService.getMovie(
      this.route.snapshot.paramMap.get('tconst'));
    this.movies_lat = this.movies_list[0].location.coordinates[0];
    this.movies_lng = this.movies_list[0].location.coordinates[1];

    this.map_locations.push({
      lat: this.movies_lat,
      lng: this.movies_lng,
    });

    this.map_options = {
      mapId: "DEMOMAP",
      center: {
        lat: this.movies_lat,
        lng: this.movies_lng,
      },
      zoom: 13
    }
  }
}
