import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * Component for handling the user profile.
 * It provides the user's profile information.
 */
@Component({
    selector: 'user-profile',
    templateUrl: 'authUser.component.html',
    standalone: true,
    imports: [CommonModule, AsyncPipe]
})

export class AuthUserComponent{

  /**
   * Constructor to inject the AuthService.
   * @param auth AuthService to handle authentication.
   */
    constructor(public auth: AuthService) {}

}
