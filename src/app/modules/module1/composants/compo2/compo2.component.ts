import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

import { ICompoWithQuitGuard } from '../../interfaces/ICompoWithQuitGuard.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit, OnDestroy, ICompoWithQuitGuard {

  private _oQuitRouteChoicesMap: Map<string, string> = null;
  sQuitRouteChoice_ID: string;
  sMessage: string = "";
  private _oQuitRouteObservable: Observable<boolean>;

  constructor(private oRouter: Router, private oActivatedRoute: ActivatedRoute ) {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de Module1 - Compo2 !!!');
  }

  // ===========================================================
  private _getQuitRouteChoicesMap(): Map<string, string> {
    if (this._oQuitRouteChoicesMap === null) {
      this._oQuitRouteChoicesMap = new Map<string, string>();
      this._oQuitRouteChoicesMap.set(this.getQuitRouteChoiceNON_ID(), "NON");
      this._oQuitRouteChoicesMap.set(this.getQuitRouteChoiceOUI_ID(), "OUI");
    }
    return(this._oQuitRouteChoicesMap);
  }
  getQuitRouteChoiceLabelById(psId: string): string {
    const sLabel = this._getQuitRouteChoicesMap().get(psId);
    return(sLabel);
  }
  getQuitRouteChoiceOUI_ID(): string {
    return("2");
  }
  getQuitRouteChoiceNON_ID(): string {
    return("1");
  }
  // ===========================================================
  public isAutoriseQuitRoute(): boolean {
    return(this.sQuitRouteChoice_ID === this.getQuitRouteChoiceOUI_ID());
  }
  public isAutoriseQuitRouteAsObservable(): Observable<boolean> {
    this._oQuitRouteObservable = new Observable<boolean>( (poObserver) => {
      window.setTimeout(() => {
        poObserver.next( this.isAutoriseQuitRoute() );
      }, 2000);

    });
    return(this._oQuitRouteObservable);
  }
  private _autoriseQuitRoute() {
    this.sQuitRouteChoice_ID = this.getQuitRouteChoiceOUI_ID();
  }

  // ===========================================================
  getQuitRouteChoice_CSSClassName(): object {
    const bAutoriseQuitRoute: boolean = this.isAutoriseQuitRoute();
    return({
      "choice-quit-route-oui": bAutoriseQuitRoute,
      "choice-quit-route-non": !bAutoriseQuitRoute
    });
  }
  // ===========================================================
  public onDemandeQuitRoute() {
    if (this.isAutoriseQuitRoute()) {
      this._showGoodBye();
    } else {
      this._showCannotQuit();
    }
  }
  private _showGoodBye() {
    this._showTempMessage('Au revoir ! :o)');
  }
  private _showCannotQuit() {
    this._showTempMessage('Sortie de Route non autorisée!!');
  }
  private _showTempMessage(psMessage: string) {
    this.sMessage = psMessage;
    window.setTimeout(() => {
      this.sMessage = '';
    }, 2000);
  }
  // ===========================================================

  ngOnInit() {
    this._autoriseQuitRoute();

    //
    console.log('ICI ngOnInit de Module1 - Compo2 !!!');
    this.oRouter.events.subscribe((poEvent) => {
      if (poEvent instanceof NavigationStart) {
        console.log('  NavigationStart: ', poEvent);
      } else if (poEvent instanceof NavigationEnd) {
        console.log('  NavigationEnd: ', poEvent);
      }
    });
  }

  goToRelativeRoute(psRelativeRoute: string) {
    // this.oActivatedRoute : route courante.
    this.oRouter.navigate([psRelativeRoute], {relativeTo: this.oActivatedRoute});
  }

  goToAppModuleCompo2() {
    // Chemin de route absolu ! (donc ce n'est pas la route : myModule1/compo2 !!)
    this.oRouter.navigate(['compo2']);
  }

  goToRoot() {
    // Chemin de route absolu ! (donc ce n'est pas la route : myModule1/ !!)
    this.oRouter.navigate(['/']);
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de Module1 - Compo2 !!!');

    //console.log(this._oQuitRouteObservable);
    delete this._oQuitRouteObservable;
    //console.log(this._oQuitRouteObservable, "\n");
  }


}
