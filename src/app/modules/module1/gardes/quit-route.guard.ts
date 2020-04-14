import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { ICompoWithQuitGuard } from '../interfaces/ICompoWithQuitGuard.interface';

@Injectable({
  providedIn: 'root'
})
export class QuitRouteGuard implements CanDeactivate<ICompoWithQuitGuard> {


  canDeactivate(
    component: ICompoWithQuitGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    component.onDemandeQuitRoute(); // Pour que mon composant puisse être informé d'une demande de sortie de route.

    //return(component.isAutoriseQuitRoute()); // Dans ce cas de renvoi direct : pas possible d'afficher un message dans le composant en question, en cas de sortie de Route.
    return(component.isAutoriseQuitRouteAsObservable()); // Plus pratique, me permet ici de gérer l'affichage temp. d'un message avant sortie de Route !
  }


}
