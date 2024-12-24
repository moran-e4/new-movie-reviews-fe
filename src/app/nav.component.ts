import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'navigation',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  standalone: true,
})
export class NavComponent {

}
