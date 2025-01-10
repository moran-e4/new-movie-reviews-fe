import { Component } from '@angular/core';
import {WebService} from '../app/services/web.service';


@Component({
  selector: 'testGenre',
  providers: [WebService],
  templateUrl: './testGenre.component.html',
  standalone: true
})


export class TestGenreComponent {
  test_output: string[] = [];

  constructor(private webService: WebService) {}


  public testingTest() {
    this.webService.getMovies(1).subscribe((response) => {
      if (Array.isArray(response) && response.length == 12)
        this.test_output.push("Page of movies fetched... PASS");
      else
        this.test_output.push("Page of movies fetched... FAIL");
    });  }

}
