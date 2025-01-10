import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TestWebServiceComponent } from './testWebService.component';
import {TestGenreComponent} from './testGenre.component';
import {TestMovieComponent} from './testMovie.component';
/**
 * Component for running various tests.
 * It includes tests for web service, genre, and movie components.
 */
@Component({
  selector: 'tests',
  templateUrl: './tests.component.html',
  imports: [
    TestWebServiceComponent,
    TestGenreComponent,
    TestMovieComponent
  ],
  standalone: true
})
export class TestsComponent implements AfterViewInit {
  /**
   * ViewChild to access the TestWebServiceComponent instance.
   */
  @ViewChild(TestWebServiceComponent) testWebServiceComponent!: TestWebServiceComponent;
  /**
   * ViewChild to access the TestGenreComponent instance.
   */
  @ViewChild(TestGenreComponent) testGenreComponent!: TestGenreComponent;
  /**
   * ViewChild to access the testMovieComponent instance.
   */
  @ViewChild(TestMovieComponent) testMovieComponent!: TestMovieComponent;

  /**
   * Runs all the test methods.
   */
  ngAfterViewInit() {
    this.testWebServiceComponent.testPagesOfMoviesAreDifferent();
    this.testWebServiceComponent.testGetAllMovies();
    this.testWebServiceComponent.testGetMovie();
    this.testWebServiceComponent.testGetReviews();
    this.testWebServiceComponent.testPostReview();
    this.testWebServiceComponent.testGetRatings();
    this.testGenreComponent.testGetGenre();
    this.testMovieComponent.testGetGenre();
  }
}
