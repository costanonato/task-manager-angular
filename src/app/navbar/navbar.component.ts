import { Component } from '@angular/core';

import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent{

  public constructor(private authService: AuthService){}
  
}