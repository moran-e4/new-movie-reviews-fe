import { Component } from '@angular/core';
import jsonData from '../assets/titlesplaceholder.json';
import {RouterOutlet} from '@angular/router';
import {NavComponent} from './nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit() {
    console.log(jsonData);
  }
}
