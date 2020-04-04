import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aRouterLink4: Array<string>;

  constructor(private oRouter: Router) {
  }

  //paParams[0] valant la value ACTUALISÉE de #_inputForModule1Compo3Param1.
  //et paParams[1] valant la value ACTUALISÉE de #_inputForModule1Compo3Param2.
  //Pas besoin de (blur) ici, car le (click) sur le <button> semble forcer la
  //MAJ de la valeur des tempalte vars désignant les <input> en question.
  loadModule1Compo3WithUrlParams(paParams: Array<string>): void {
    this.oRouter.navigate( this._getModule1Compo3UrlParams(paParams) );
  }

  //paParams[0] valant la value ACTUALISÉE de #inputForModule1Compo3Param1.
  //et paParams[1] valant la value ACTUALISÉE de #inputForModule1Compo3Param2.
  // (actualisation réalisée grâce au rajout d'un évènement, comme par ex. ici : (blur)).
  updateRouterLink4(paParams: Array<string>) {
    //Les éléments de paParams sont des value de <input #myInput>,
    //transmis suite à évènement (blur) sur ces derniers.
    //On ne peut en effet, avoir ces #myInput.value à jour dans le HTML,
    //au moment du clic sur le lien  <a [routerLink]="...">...</a>
    //Pour forcer leur mise à jour, il faut en effet leur rajouter un évènement
    //forçant à capturer leur changement(ici un blur).
    //Enfin, quand bien même, il reste plus propre de TRAITER ces valeurs
    //dans le .ts que directement dans le HTML via les template vars,
    //d'où la présente méthode.
    //  Explications sur ceci :  https://github.com/angular/angular/issues/5250

    // Remarque : via un <button (click)="..."> puis un this.oRouter.navigate(...),
    //            plutôt qu'un <a [routerLink]="...">...</a>,
    //            le problème ne se pose pas (pas besoin de (blur) ou autre sur les <input> en question).
    //            (c'est le cas lors de l'appel à this.loadModule1Compo3WithUrlParams).

    this.aRouterLink4 = this._getModule1Compo3UrlParams(paParams);
  }


  //@return {Array<string>}
  //  Ex.:
  //   ['myModule1/compo3', paParams[0], paParams[1] ]
  //   Pour une URL valant : myModule1/compo3/paParams[0]/paParams[1]
  private _getModule1Compo3UrlParams(paParams: Array<string>): Array<string> {
    return( [this._getModule1Compo3SubPath(), ...paParams] );
  }
  private _getModule1Compo3SubPath(): string {
    return('myModule1/compo3');
  }

}
