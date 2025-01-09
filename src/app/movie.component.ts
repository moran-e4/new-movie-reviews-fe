import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule} from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder} from '@angular/forms';

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
    ReactiveFormsModule
  ],
})
export class MovieComponent {

  movies_list: any;
  movies_lat: any;
  movies_lng: any;
  map_options: google.maps.MapOptions = {};
  map_locations: any[] = [];
  loremIpsum: any;
  temperature: any;
  weather: any;
  weatherIcon: any;
  weatherIconUrl: any;
  tempColour: any;
  reviewForm: any;


  constructor( public dataService: DataService,
               private route: ActivatedRoute,
               private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      username: "",
      comment: "",
      rating: 5,
    })
    this.movies_list = this.dataService.getMovie(
      this.route.snapshot.paramMap.get('tconst'));
    console.log(this.movies_list.reviews);
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
    };

    this.dataService.getLoremIpsum(1)
      .subscribe( (response: any) => {
        this.loremIpsum = response.text.slice(0, 400);
      })

    this.dataService.getCurrentWeather(this.movies_lat, this.movies_lng)
      .subscribe( (response: any) => {
        let weatherResponse = response['weather'][0]['description'];
        this.temperature = Math.round(response['main']['temp']);
        this.weather = weatherResponse[0].toUpperCase() + weatherResponse.slice(1);
        this.weatherIcon = response['weather'][0]['icon'];
        this.weatherIconUrl = 'http://openweathermap.org/img/wn/' + this.weatherIcon + '@4x.png';
        this.tempColour = this.dataService.getTemperatureColour(this.temperature);
      });
  }

  onSubmit() {
    console.log(this.reviewForm.value);
  }
}
