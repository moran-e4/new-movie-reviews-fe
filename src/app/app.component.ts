import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from './nav.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ngOnInit() {
    // console.log(jsonData);
  // }

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.populateReview();
  }

}
