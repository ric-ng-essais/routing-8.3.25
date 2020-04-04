import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit, OnDestroy {

  constructor() {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de AppModule - Compo2 !!!');
  }

  ngOnInit() {
    console.log('ICI constructor de ngOnInit - Compo2 !!!');
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de AppModule - Compo2 !!!');
  }

}
