import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { TokenService } from "./token.service";

import { User } from "./user.model";

@Injectable()

export class AuthService{
  public constructor(private tokenService: TokenService){ }

  public signUp(user: User): Observable<Response>{
    return this.tokenService.registerAccount(user as any).pipe(
      catchError(this.handleErrors)
    )
  }
  
  public signIn(uid: string, password: string): Observable<Response>{
    let signInData = {
      email: uid,
      password: password
    };

    return this.tokenService.signIn(signInData).pipe(
      catchError(this.handleErrors)
    )
  }

  public signOut(): Observable<Response>{
    return this.tokenService.signOut().pipe(
      catchError(this.handleErrors)
    )
  }

  public userSignedIn(): boolean{
    return this.tokenService.userSignedIn();
  }
  
  
  private handleErrors(error: Response){
    console.log("SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
    return throwError(error);
  }
}