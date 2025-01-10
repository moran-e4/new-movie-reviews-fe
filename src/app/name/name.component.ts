import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebService} from '../services/web.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'nameSearch',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  standalone: true,
  providers: [WebService],
  imports: [RouterLink, FormsModule, ReactiveFormsModule, NgIf],
})
export class NameSearchComponent {
  nameSearchForm: any;
  name_search_list: any;
  constructor(
    private formBuilder: FormBuilder,
    private webService: WebService
  ) {}
  ngOnInit() {
    this.nameSearchForm = this.formBuilder.group({
      search: [""],
    });
  }
  onSubmit() {
    this.webService.getNameSearch(this.nameSearchForm.value.search)
      .subscribe((response) => {
        this.name_search_list = [response];
      });
  }
}
