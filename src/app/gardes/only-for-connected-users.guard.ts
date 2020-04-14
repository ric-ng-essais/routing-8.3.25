import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//import { UserConnexionService } from '../modules/module2/services/user-connexion.service';
// OU Bien
import { IUserConnexionService } from '../modules/module2/interfaces/IUserConnexionService.interface';
import { Module2Module } from '../modules/module2/module2.module'; // Pour static: Module2Module.getUserConnexionServiceInjectionToken()


@Injectable({
  providedIn: 'root'
})
export class OnlyForConnectedUsersGuard implements CanActivate {
  constructor(
    @Inject(Module2Module.getUserConnexionServiceInjectionToken())
      private oUserConnexionService: IUserConnexionService
  )  {}
// Ou sinon plus simple mais moins souple :
  /*constructor(
      private oUserConnexionService: UserConnexionService
  )  {}*/


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.oUserConnexionService.isCurrentUserConnected();
  }

}
