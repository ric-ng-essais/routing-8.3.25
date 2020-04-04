import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-compo3-url-parametered',
  templateUrl: './compo3-url-parametered.component.html',
  styleUrls: ['./compo3-url-parametered.component.css']
})
export class Compo3UrlParameteredComponent implements OnInit, OnDestroy {

  sUrlParam1: string;
  sUrlParam2: string;

  constructor(private oActivatedRoute: ActivatedRoute) {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de Module1 - Compo3 !!!');
  }

  ngOnInit() {
    console.log('ICI ngOnInit de Module1 - Compo3 !!!');

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
      console.log('\n..........................\n');
      this.sUrlParam1 = poParams.get('parametre1');
      this.sUrlParam2 = poParams.get('parametre2');

      console.log('  window.location.protocol: ' + window.location.protocol); // http:
      console.log('  window.location.hostname: ' + window.location.hostname); // localhost
      console.log('  window.location.port: ' + window.location.port); // 4200
      console.log('  window.location.host: ' + window.location.host); // localhost:4200
      console.log('  window.location.origin: ' + window.location.origin); // http://localhost:4200
      console.log('  window.location.pathname: ' + window.location.pathname); // /myModule1/compo3/.../...
      console.log('  window.location.href: ' + window.location.href);
      // window.alert(this.oActivatedRoute.toString());
      console.log('  this.oActivatedRoute.toString(): '
                  + this.oActivatedRoute.toString()); // Route(url:'compo3/.../...', path:'compo3/:parametre1/:parametre2')
      console.log('  Current route: "' + this._getCurrentRouteAsString() + '"');

      // VOIR aussi, l'injectable de type Location de '@angular/common', exemple dans compo1 de Module1.

   });

  }

  private _getCurrentRouteAsString(): string {
    const oRegExp: RegExp = new RegExp('^Route[(]url:\'(.+)\'[,](.+)$'); // Pour extraire la partie qui nous
                                                                         // intéresse, de l'expression :
                                                                         // this.oActivatedRoute.toString().
    const sCurrentRoute: string = this.oActivatedRoute.toString().replace( oRegExp, '$1');
    // window.alert(sCurrentRoute);
    return(sCurrentRoute);
  }

  // L'inconvénient de passer par this.oActivatedRoute.snapshot, est que,
  // si l'URL passe de par exemple : localhost:4200/myModule1/compo3/paramA/paramB
  //                 à JUSTE après : localhost:4200/myModule1/compo3/paramC/paramD
  //            eh bien les params lus ne seront pas actualisés, c-à-d qu'ici,
  //            this.sUrlParam1 et this.sUrlParam2, resteront figés sur respectivement, les valeurs initiales :
  //            "paramA" et "paramB" !!
  // Pour qu'elles soient actualisées, il faudra qu'une toute autre URL soit invoquée,
  // entre les 2 invocations d'URL évoquées, c-à-d :
  //                   1. localhost:4200/myModule1/compo3/paramA/paramB
  // PUIS par exemple: 2.  localhost:4200/myModule1/compo2
  // puis enfin      : 3. localhost:4200/myModule1/compo3/paramC/paramD
  //
  // >> En fait, this.oActivatedRoute.snapshot se réfère à l'état de la route au moment de la constructon
  // du composant !! <<<
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

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de Module1 - Compo3 !!!');
  }

}
