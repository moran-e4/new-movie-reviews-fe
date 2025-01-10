import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebService} from '../services/web.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  providers: [WebService],
  imports: [RouterLink, FormsModule, ReactiveFormsModule, NgIf],
})
export class SearchComponent {
  searchForm: any;
  search_list: any;

  constructor(
    private formBuilder: FormBuilder,
    private webService: WebService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: [""],
    });
  }

  onSubmit() {
    this.webService.getSearch(this.searchForm.value.search)
      .subscribe((response) => {
        this.search_list = [response];
        console.log(this.search_list);
      });
  }
}
