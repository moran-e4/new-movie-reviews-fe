import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TestWebServiceComponent } from './testWebService.component';
import {TestGenreComponent} from './testGenre.component';

@Component({
  selector: 'tests',
  templateUrl: './tests.component.html',
  imports: [
    TestWebServiceComponent,
    TestGenreComponent
  ],
  standalone: true
})
export class TestsComponent implements AfterViewInit {
  @ViewChild(TestWebServiceComponent) testWebServiceComponent!: TestWebServiceComponent;
  @ViewChild(TestGenreComponent) testGenreComponent!: TestGenreComponent;

  ngAfterViewInit() {
    this.testWebServiceComponent.testPagesOfMoviesAreDifferent();
    this.testWebServiceComponent.testGetAllMovies();
    this.testWebServiceComponent.testGetMovie();
    this.testWebServiceComponent.testGetReviews();
    this.testWebServiceComponent.testPostReview();
    this.testWebServiceComponent.testGetRatings();
    this.testGenreComponent.testGetGenre();
  }
}
