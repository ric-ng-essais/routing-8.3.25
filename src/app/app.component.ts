import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';

//import { UserConnexionService } from './modules/module2/services/user-connexion.service';
// Ou Bien :
import { IUserConnexionService } from './modules/module2/interfaces/IUserConnexionService.interface';
import { Module2Module } from './modules/module2/module2.module';



interface IWithQueryParams {
  queryParams: {MyQueryParam1: string, MyQueryParam2: string};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  aRouterLink4: Array<string> = [];
  oRouterLink4_QueryParams: object;
  sErrMessage = '';

  aRouterLinkActiveCSSClasses = ['router-link-active'];

  /*constructor(private oRouter: Router, private oUserConnexionService: UserConnexionService) {
    console.log('ICI constructor de AppModule - AppComponent !!!');
  }*/
// Ou bien
  constructor(
    private oRouter: Router,
    @Inject(Module2Module.getUserConnexionServiceInjectionToken())
    private oUserConnexionService: IUserConnexionService
  ) {
    console.log('ICI constructor de AppModule - AppComponent !!!');
  }


  ngOnInit() {
    console.log('ICI ngOnInit de AppModule - AppComponent !!!');
  }

  // paParams[0] valant la value ACTUALISÉE de #_inputForModule1Compo3Param1.
  // et paParams[1] valant la value ACTUALISÉE de #_inputForModule1Compo3Param2.
  // Pas besoin de (blur) ici, car le (click) sur le <button> semble forcer la
  // MAJ de la valeur des tempalte vars désignant les <input> en question.
  //
  loadModule1Compo3WithUrlParams(paParams: Array<string>, paQueryParams: Array<string>): void {
    if (paParams[0].trim() !== '' && paParams[1].trim() !== '') {
      this.oRouter.navigate(
          this._getModule1Compo3UrlParams(paParams), //Chemin dans l'URL.
          this._getModule1Compo3UrlQueryParams(paQueryParams) //Paramètres dans l'URL.
      );
    } else {
      this._showErrMessageMissingParam1EtParam2();
    }
  }

  // paParams[0] valant la value ACTUALISÉE de #inputForModule1Compo3Param1.
  // et paParams[1] valant la value ACTUALISÉE de #inputForModule1Compo3Param2.
  //  (actualisation réalisée grâce au rajout d'un évènement, comme par ex. ici : (blur)).
  updateRouterLink4(paParams: Array<string>) {
    // Les éléments de paParams sont des value de <input #myInput>,
    // transmis suite à évènement (blur) sur ces derniers.
    // On ne peut en effet, avoir ces #myInput.value à jour dans le HTML,
    // au moment du clic sur le lien  <monTag [routerLink]="...">...</monTag>
    // Pour forcer leur mise à jour, il faut en effet leur rajouter un évènement
    // forçant à capturer leur changement(ici un blur).
    // Enfin, quand bien même, il reste plus propre de TRAITER ces valeurs
    // dans le .ts que directement dans le HTML via les template vars,
    // d'où la présente méthode.
    //  Explications sur ceci :  https://github.com/angular/angular/issues/5250

    // Remarque : via un <monTag (click)="..."> puis un this.oRouter.navigate(...),
    //            plutôt qu'un <monTag [routerLink]="...">...</monTag>,
    //            le problème ne se pose pas (pas besoin de (blur) ou autre sur les <input> évoqués).
    //            (c'est le cas lors de l'appel à this.loadModule1Compo3WithUrlParams).
    if (paParams[0].trim() !== '' && paParams[1].trim() !== '') {
      this.aRouterLink4 = this._getModule1Compo3UrlParams(paParams);
    } else {
      this.aRouterLink4 = [];
    }
  }
  checkRouterLinkParamsValid() {
    if (this.aRouterLink4.length === 0) {
      this._showErrMessageMissingParam1EtParam2();
    }
  }
  updateRouterLink4_QueryParams(paQueryParams: Array<string>) {
    this.oRouterLink4_QueryParams = this._getModule1Compo3UrlQueryParams(paQueryParams).queryParams;
    console.log(this.oRouterLink4_QueryParams);
  }


  // @return {Array<string>}
  //   Ex.:
  //    ['myModule1/compo3', paParams[0], paParams[1] ]
  //    Pour une URL valant : myModule1/compo3/paParams[0]/paParams[1]
  private _getModule1Compo3UrlParams(paParams: Array<string>): Array<string> {
    return( [this._getModule1Compo3SubPath(), ...paParams] );
  }
  private _getModule1Compo3SubPath(): string {
    return('myModule1/compo3');
  }

  private _getModule1Compo3UrlQueryParams(paQueryParams: Array<string>): IWithQueryParams {
    return( {queryParams: {MyQueryParam1: paQueryParams[0], MyQueryParam2: paQueryParams[1]}} );
  }


  private _showErrMessageMissingParam1EtParam2() {
    this._showErrMessage('> Merci de renseigner Param1 et Param2 !');
  }
  private _showErrMessage(psErrMessage: string) {
    this.sErrMessage = psErrMessage;
    window.setTimeout(() => {
      this.sErrMessage = '';
    }, 1800);
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de AppModule - AppComponent !!!');
  }


  //==========================================================
  onClickConnexion() {
    if (this.isCurrentUserConnected()) {
      this._disconnectCurrentUser();
    } else {
      this._connectCurrentUser();
    }
  }
  isCurrentUserConnected(): boolean {
    return( this.oUserConnexionService.isCurrentUserConnected() );
  }
  private _disconnectCurrentUser() {
    this.oUserConnexionService.disconnectCurrentUser();
    this._goToHomeRoute();
  }
  private _connectCurrentUser() {
    this.oUserConnexionService.connectCurrentUser();
  }

  private _goToHomeRoute() {
    this.oRouter.navigate([""]);
  }

  getConnexionButtonLabel(): string {
    let sLabel: string;
    if (this.oUserConnexionService.isCurrentUserConnected()) {
      sLabel = "Se déconnecter"
    } else {
      sLabel = "Se connecter";
    }
    return(sLabel);
  }

  onDemandeAccesToPrivateMembersZone() {
    if (!this.isCurrentUserConnected()) {
      this._showErrMessage("VOUS DEVEZ ÊTRE CONNECTÉ pour cela !!");
    }
  }
}
