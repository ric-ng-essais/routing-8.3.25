import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit, OnDestroy {

  constructor(private oRouter: Router, private oActivatedRoute: ActivatedRoute ) {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de Module1 - Compo2 !!!');
  }

  ngOnInit() {
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
  }

}
