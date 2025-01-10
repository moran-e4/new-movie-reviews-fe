import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebService} from '../services/web.service';
import {NgIf} from '@angular/common';

/**
 * Component for searching movies.
 * @component
 * @selector search
 * @templateUrl ./search.component.html
 * @styleUrls ./search.component.css
 * @standalone true
 * @providers WebService
 * @imports RouterLink, FormsModule, ReactiveFormsModule, NgIf
 */
@Component({
  selector: 'nameSearch',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  standalone: true,
  providers: [WebService],
  imports: [RouterLink, FormsModule, ReactiveFormsModule, NgIf],
})
export class NameSearchComponent {
  /**
   * Form group for search input
   */
  nameSearchForm: any;
  /**
   * List to store search results
   */
  name_search_list: any;

  /**
   * Constructor
   * @param formBuilder FormBuilder to create form group
   * @param webService WebService to make HTTP requests
   */
  constructor(
    private formBuilder: FormBuilder,
    private webService: WebService
  ) {}

  /**
   * Initialize the search form with an empty search field
   */
  ngOnInit() {
    this.nameSearchForm = this.formBuilder.group({
      search: [""],
    });
  }

  /**
   * Make a search request using the value from the search form
   */
  onSubmit() {
    this.webService.getNameSearch(this.nameSearchForm.value.search)
      .subscribe((response) => {
        this.name_search_list = [response];
      });
  }
}
