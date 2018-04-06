import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent{

  public constructor(private authService: AuthService, private router: Router){}
  
  public signOutUser(){
    this.authService.signOut()
      .subscribe(
        () => this.router.navigate(['/sign-in'])
      )
  }

  public userSignedIn(){
    return this.authService.userSignedIn();
  }

}