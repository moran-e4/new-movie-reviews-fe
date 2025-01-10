import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'user-profile',
    templateUrl: 'authUser.component.html',
    standalone: true,
    imports: [CommonModule, AsyncPipe]
})

export class AuthUserComponent{

    constructor(public auth: AuthService) {}

}
