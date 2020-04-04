import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-compo3-url-parametered',
  templateUrl: './compo3-url-parametered.component.html',
  styleUrls: ['./compo3-url-parametered.component.css']
})
export class Compo3UrlParameteredComponent implements OnInit {

  sUrlParam1: string;
  sUrlParam2: string;

  constructor(private oActivatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    // Méthode préférable, car là au moins, on est certain d'avoir this.sUrlParam1 et this.sUrlParam2
    // toujours à jour, en cas de changement de valeur des params dans l'URL.
    this._updateParamsBySubscribe();

    // Méthode à éviter :
    //   this._updateParamsBySnapshot();
    // Explications : https://medium.com/@tiboprea/accessing-url-parameters-in-angular-snapshot-vs-subscription-efc4e70f9053
  }

  // Cette façon de faire prémunit du souci causé par l'utilisation de this.oActivatedRoute.snapshot,
  // et permet de s'assurer que la lecture des params de l'URL est toujours à jour.
  private _updateParamsBySubscribe(): void {
    this.oActivatedRoute.paramMap.subscribe((poParams) => {
      this.sUrlParam1 = poParams.get('parametre1');
      this.sUrlParam2 = poParams.get('parametre2');
   });

  }

  // L'inconvénient de passer par this.oActivatedRoute.snapshot, est que,
  // si l'URL passe de par exemple : localhost:4200/myModule1/compo3/paramA/paramB
  //                 à JUSTE après : localhost:4200/myModule1/compo3/paramC/paramD
  //            eh bien les params lus ne seront pas actualisés, c-à-d qu'ici,
  //            this.sUrlParam1 et this.sUrlParam2, resteront figés sur respectivement, les valeurs :
  //            "paramA" et "paramB" !!
  // Pour qu'elles soient actualisés, il faudra qu'une toute autre URL soit invoquée,
  // entre les 2 invocations d'URL, c-à-d :
  //                   localhost:4200/myModule1/compo3/paramA/paramB
  // PUIS par exemple:   localhost:4200/myModule1/compo2
  // puis enfin      : localhost:4200/myModule1/compo3/paramC/paramD
  //
  // (https://medium.com/@tiboprea/accessing-url-parameters-in-angular-snapshot-vs-subscription-efc4e70f9053)
  private _updateParamsBySnapshot(): void {
    const oActivatedRouteSnapshot: ActivatedRouteSnapshot = this.oActivatedRoute.snapshot;

    /// 1ère Syntaxe, disons assez périmée et moins SOLID :
    //    this.sUrlParam1 = oActivatedRouteSnapshot.params['parametre1'];
    //    this.sUrlParam2 = oActivatedRouteSnapshot.params['parametre2'];
    //  syntaxe équivalente :
    //    this.sUrlParam1 = oActivatedRouteSnapshot.params.parametre1;
    //    this.sUrlParam2 = oActivatedRouteSnapshot.params.parametre2;

    /// Meilleure syntaxe, à privilégier, plus SOLID :
    this.sUrlParam1 = oActivatedRouteSnapshot.paramMap.get('parametre1');
    this.sUrlParam2 = oActivatedRouteSnapshot.paramMap.get('parametre2');

  }

}
