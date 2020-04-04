import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit, OnDestroy {

  constructor(private oRouteLocation: Location) {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de Module1 - Compo1 !!!');
    console.log('  this.oRouteLocation.path() = ' + this.oRouteLocation.path()); // /myModule1/compo1
  }

  ngOnInit() {
    console.log('ICI ngOnInit de Module1 - Compo1 !!!');
  }

  goToPreviousUrl_Facon1() {
    this.oRouteLocation.back();
  }

  goToPreviousUrl_Facon2() {
    window.history.back();
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de Module1 - Compo1 !!!');
  }

}
