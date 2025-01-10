import { Component } from '@angular/core';
import {WebService} from '../app/services/web.service';

/**
 * Component for testing the WebService.
 * It contains various test methods to verify the functionality of the WebService.
 */
@Component({
  selector: 'testWebService',
  providers: [WebService],
  templateUrl: './testWebService.component.html',
  standalone: true
})

export class TestWebServiceComponent {
  /**
   * Array to store test output messages.
   */
  test_output: string[] = [];
  /**
   * List of movies from the first page.
   */
  first_movies_list: any[] = [];
  /**
   * List of movies from the second page.
   */
  second_movies_list: any[] = [];

  /**
   * Constructor to inject the WebService.
   * @param webService Service to fetch data from the api.
   */
  constructor(private webService: WebService) {}

  /**
   * Test to check if pages of movies are different.
   */
  public testPagesOfMoviesAreDifferent() {
    this.webService.getMovies(1).subscribe((response) => {
      this.first_movies_list = response;
      this.webService.getMovies(2).subscribe((response) => {
        this.second_movies_list = response;
        if (this.first_movies_list[0].tconst != this.second_movies_list[0].tconst)
          this.test_output.push("Pages of movies are different... PASS");
          else
          this.test_output.push("Pages of movies are different... FAIL");
      });
    });
  }

  /**
   * Test to check if a page of movies is fetched correctly.
   */
  public testGetAllMovies() {
    this.webService.getMovies(1).subscribe((response) => {
      if (Array.isArray(response) && response.length == 12)
        this.test_output.push("Page of movies fetched... PASS");
      else
        this.test_output.push("Page of movies fetched... FAIL");
    });
  }

  /**
   * Test to check if a specific movie is fetched correctly.
   */
  public testGetMovie() {
    this.webService.getMovie("6726a80c02db8da58786d6e2").subscribe((response) => {
      if (response.originalTitle == "Le clown et ses chiens")
        this.test_output.push("Movie fetched... PASS");
      else
        this.test_output.push("Movie fetched... FAIL");
    });
  }

  /**
   * Test to check if reviews for a movie are fetched correctly.
   */
  public testGetReviews() {
    this.webService.getReviews("6726a80c02db8da58786d6e2").subscribe((response) => {
      if (response[0]._id == "677f4db0f028c1d3625bce16")
        this.test_output.push("Test review response... PASS");
      else
        this.test_output.push("Test review response... FAIL");
    });
  }

  /**
   * Test to check if a review is posted correctly.
   */
  public testPostReview() {
    let test_review = {
      username: "test",
      comment: "test",
      rating: 5
    }
    this.webService.getReviews("6726a80c02db8da58786d6e2").subscribe((response) => {
      let num_reviews = response.length;
      this.webService.postReview("6726a80c02db8da58786d6e2", test_review).subscribe((response) => {
        this.webService.getReviews("6726a80c02db8da58786d6e2").subscribe((response) => {
          if (response.length == num_reviews + 1)
            this.test_output.push("Test post review... PASS");
          else
            this.test_output.push("Test post review... FAIL");
        });
      });
    });
  }

  /**
   * Test to check if ratings for a movie are fetched correctly.
   */
  public testGetRatings() {
    this.webService.getRatings("tt0000002").subscribe((response) => {
      if (response[0].rating == 1)
        this.test_output.push("Ratings fetched... PASS");
      else
        this.test_output.push("Ratings fetched... FAIL");
    });
  }


}
