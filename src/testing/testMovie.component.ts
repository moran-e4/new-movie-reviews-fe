import {Component} from '@angular/core';
import {WebService} from '../app/services/web.service';


@Component({
  selector: 'testMovie',
  providers: [WebService],
  templateUrl: './testMovie.component.html',
  standalone: true
})


export class TestMovieComponent {
  test_output: string[] = [];

  constructor(private webService: WebService) {}

  public testGetGenre() {
    this.webService.getGenre("Comedy").subscribe((response) => {
      console.log(response);
      if (response[0].genres == "Comedy")
        this.test_output.push("Genres fetched... PASS");
      else
        this.test_output.push("Genres fetched... FAIL");
    });
  }


}
