import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  constructor(private oRouteLocation: Location) {
    console.log('ICI constructor de Module1 - Compo1 !!!');
    console.log('  this.oRouteLocation.path() = ' + this.oRouteLocation.path()); // /myModule1/compo1
  }

  ngOnInit() {
    console.log('ICI constructor de ngOnInit - Compo1 !!!');
  }

  goToPreviousUrl_Facon1() {
    this.oRouteLocation.back();
  }

  goToPreviousUrl_Facon2() {
    window.history.back();
  }

}
