import { Component } from '@angular/core';
import jsonData from '../assets/titlesplaceholder.json';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnInit() {
    console.log(jsonData);
  }
}
