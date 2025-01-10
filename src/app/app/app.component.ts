import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from '../navigation/nav.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {}
  ngOnInit() {
  }

}
