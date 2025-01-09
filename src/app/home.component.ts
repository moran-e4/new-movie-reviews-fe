import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { AuthButtonComponent } from './authButton.component';
import { AuthUserComponent } from './authUser.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
  imports : [RouterOutlet, AuthButtonComponent, AuthUserComponent]
})
export class HomeComponent {

}
