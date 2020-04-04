import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit, OnDestroy {

  constructor() {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de AppModule - Compo1 !!!');
  }

  ngOnInit() {
    console.log('ICI ngOnInit de AppModule - Compo1 !!!');
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de AppModule - Compo1 !!!');
  }

}
