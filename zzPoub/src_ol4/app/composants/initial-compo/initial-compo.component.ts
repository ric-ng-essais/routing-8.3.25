import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-initial-compo',
  templateUrl: './initial-compo.component.html',
  styleUrls: ['./initial-compo.component.css']
})
export class InitialCompoComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de AppModule - InitialCompo !!!');
  }

  ngOnInit() {
    console.log('ICI ngOnInit de AppModule - InitialCompo !!!');
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de AppModule - InitialCompo !!!');
  }

}
