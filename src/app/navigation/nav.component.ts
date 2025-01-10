import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { AuthButtonComponent } from '../auth/authButton.component';

/**
 * Component for navigation.
 * It includes routing links and an authentication button.
 */
@Component({
  selector: 'navigation',
  imports: [RouterOutlet, RouterLink, AuthButtonComponent],
  templateUrl: './nav.component.html',
  standalone: true,
})
export class NavComponent {

}
