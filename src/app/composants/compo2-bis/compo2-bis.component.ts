import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-compo2-bis',
  templateUrl: './compo2-bis.component.html',
  styleUrls: ['./compo2-bis.component.css']
})
export class Compo2BisComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de AppModule - Compo2Bis !!!');
  }

  ngOnInit() {
    console.log('ICI ngOnInit de AppModule - Compo2Bis !!!');
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de AppModule - Compo2Bis !!!');
  }

}
