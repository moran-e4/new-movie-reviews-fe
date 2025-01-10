import {Component} from '@angular/core';
import {WebService} from '../app/services/web.service';

/**
 * Component for testing the WebService related to genres.
 */
@Component({
  selector: 'testGenre',
  providers: [WebService],
  templateUrl: './testGenre.component.html',
  standalone: true
})


export class TestGenreComponent {
  /**
   * Array to store test output messages.
   */
  test_output: string[] = [];

  /**
   * Constructor to inject the WebService.
   * @param webService Service to fetch data from the api.
   */
  constructor(private webService: WebService) {}

  /**
   * Test to check if genres for a movie are fetched correctly.
   */
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
