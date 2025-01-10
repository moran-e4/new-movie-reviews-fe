import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/**
 * Component for handling authentication buttons.
 * It provides login and logout functionality using Auth0.
 */
@Component({
  selector: 'auth-button',
  templateUrl: 'authButton.component.html',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  providers: [Router]
})

export class AuthButtonComponent{

  /**
   * Constructor to inject authentication.
   * @param document Reference to the document object.
   * @param auth AuthService to handle authentication.
   * @param router Router to navigate between routes.
   */
  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService,
              public router: Router) {}

}
