import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { AuthButtonComponent } from '../auth/authButton.component';

@Component({
  selector: 'navigation',
  imports: [RouterOutlet, RouterLink, AuthButtonComponent],
  templateUrl: './nav.component.html',
  standalone: true,
})
export class NavComponent {

}
