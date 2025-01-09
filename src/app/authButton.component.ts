import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auth-button',
  templateUrl: 'authButton.component.html',
  standalone: true,
  imports: [CommonModule, AsyncPipe]
})

export class AuthButtonComponent{

  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService) {}

}
