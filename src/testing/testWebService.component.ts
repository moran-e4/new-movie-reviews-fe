import { Component } from '@angular/core';
import {WebService} from '../app/services/web.service';


@Component({
  selector: 'testWebService',
  providers: [WebService],
  templateUrl: './testWebService.component.html',
  standalone: true
})

export class TestWebServiceComponent {
  test_output: string[] = [];
  first_movies_list: any[] = [];
  second_movies_list: any[] = [];

  constructor(private webService: WebService) {}


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

  public testGetAllMovies() {
    this.webService.getMovies(1).subscribe((response) => {
      if (Array.isArray(response) && response.length == 12)
        this.test_output.push("Page of movies fetched... PASS");
      else
        this.test_output.push("Page of movies fetched... FAIL");
    });
  }

  public testGetMovie() {
    this.webService.getMovie("6726a80c02db8da58786d6e2").subscribe((response) => {
      if (response.originalTitle == "Le clown et ses chiens")
        this.test_output.push("Movie fetched... PASS");
      else
        this.test_output.push("Movie fetched... FAIL");
    });
  }

  public testGetReviews() {
    this.webService.getReviews("6726a80c02db8da58786d6e2").subscribe((response) => {
      if (response[0]._id == "677f4db0f028c1d3625bce16")
        this.test_output.push("Test review response... PASS");
      else
        this.test_output.push("Test review response... FAIL");
    });
  }

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

  public testGetRatings() {
    this.webService.getRatings("tt0000002").subscribe((response) => {
      if (response[0].rating == 1)
        this.test_output.push("Ratings fetched... PASS");
      else
        this.test_output.push("Ratings fetched... FAIL");
    });
  }

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
