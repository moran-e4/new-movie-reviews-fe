import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  imports : [RouterOutlet]
})
export class HomeComponent {

}
