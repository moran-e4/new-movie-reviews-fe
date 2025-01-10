import {Component} from '@angular/core';
import {WebService} from '../app/services/web.service';

/**
 * Component for testing the WebService related to genres.
 */
@Component({
  selector: 'testSearch',
  providers: [WebService],
  templateUrl: './testSearch.component.html',
  standalone: true
})


export class TestSearchComponent {
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
  public testSearch() {
    this.webService.getSearch("Back to the ").subscribe((response) => {
      if (response[0].primaryTitle == "Back to the Soil")
        this.test_output.push("Partial search returns correct result... PASS");
      else
        this.test_output.push("Partial search returns correct result... FAIL");
    });
  }


  public testSearchName() {
    this.webService.getNameSearch("James Dean").subscribe((response) => {
      if (response[0].primaryTitle == "East of Eden")
        this.test_output.push("Actor name search returns correct result... PASS");
      else
        this.test_output.push("Actor name search returns correct result... FAIL");
    });
  }


}
