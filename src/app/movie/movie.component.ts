import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { WebService } from '../services/web.service';

/**
 * Component to display movie details, reviews, and related information.
 */
@Component({
  selector: 'movie',
  providers: [DataService, WebService],
  templateUrl: './movie.component.html',
  standalone: true,
  styleUrl: './movie.component.css',
  imports: [
    RouterOutlet,
    CommonModule,
    GoogleMapsModule,
    ReactiveFormsModule,
  ],
})

/**
 * MovieComponent is responsible for displaying movie details, reviews, and related information.
 * It fetches data from various services and handles user interactions such as submitting reviews.
 * @description movies_list: List of movies to display.
 * @param reviewForm: Form to submit reviews.
 * @type {any} review_list: List of reviews for the movie.
 * @type {any} ratings: Ratings for the movies in the list.
 */
export class MovieComponent {
  /**
   * movies_list: List of movies to display.
   * @type {Array<{ title: string, year: number, genre: string, rating: number }>}
   */
  movies_list: any;
  /**
   * reviewForm: Form to submit reviews.
   * @type {any}
   */
  reviewForm: any;
  /**
   * review_list: List of reviews for the movie.
   * @type {Array<{ movieId: string, reviewer: string, comment: string, rating: number }>}
   */
  review_list: any;
  /**
   * ratings: Ratings for the movies in the list.
   * @type {{ [key: string]: number }}
   */
  ratings: { [key: string]: number } = {};

  /**
   * Constructor to inject necessary services.
   * @param dataService Service to fetch data.
   * @param route Activated route to get route parameters.
   * @param formBuilder Form builder to create reactive forms.
   * @param authService Authentication service.
   * @param webService Web service to fetch movie-related data.
   */
  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private webService: WebService
  ) {}

  /**
   * Initializes the component, fetches movie details, reviews, and other related data.
   */
  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      username: ["", Validators.required],
      comment: ["", Validators.required],
      rating: [5, Validators.required],
    });

    this.webService.getMovie(this.route.snapshot.paramMap.get('_id'))
      .subscribe((response) => {
        this.movies_list = [response];
        this.loadRatings();
      });

    this.webService.getReviews(this.route.snapshot.paramMap.get('_id'))
      .subscribe((response) => {
        this.review_list = response;
      });
  }

  /**
   * Loads ratings for the movies in the list.
   */
  loadRatings(): void {
    this.movies_list.forEach((movie: any) => {
      this.webService.getRatings(movie.tconst).subscribe((rating) => {
        this.ratings[movie.tconst] = rating.averageRating;
      });
    });
  }

  /**
   * Submits a new review and refreshes the review list.
   */
  onSubmit() {
    this.webService.postReview(
      this.route.snapshot.paramMap.get('_id'),
      this.reviewForm.value
    ).subscribe((response) => {
      this.reviewForm.reset();
      this.webService.getReviews(this.route.snapshot.paramMap.get('_id'))
        .subscribe((response) => {
          this.review_list = response;
        });
    });
  }

  /**
   * Checks if a form control is invalid and has been touched.
   * @param control The form control name.
   * @returns True if the control is invalid and touched, otherwise false.
   */
  isInvalid(control: any) {
    return this.reviewForm.controls[control].invalid &&
      this.reviewForm.controls[control].touched;
  }

  /**
   * Checks if the form is untouched.
   * @returns True if the form is untouched, otherwise false.
   */
  isUntouched() {
    return this.reviewForm.controls.username.pristine ||
      this.reviewForm.controls.comment.pristine;
  }

  /**
   * Ensures form completion before submission.
   * @returns True if the form is incomplete, otherwise false.
   */
  isIncomplete() {
    return this.isInvalid('username') ||
      this.isInvalid('comment') ||
      this.isUntouched();
  }
}
