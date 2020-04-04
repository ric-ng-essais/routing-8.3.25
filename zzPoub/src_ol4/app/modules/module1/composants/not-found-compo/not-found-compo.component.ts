import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-not-found-compo',
  templateUrl: './not-found-compo.component.html',
  styleUrls: ['./not-found-compo.component.css']
})
export class NotFoundCompoComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de Module1 - NotFoundCompo !!!');
  }

  ngOnInit() {
    console.log('ICI ngOnInit de Module1 - NotFoundCompo !!!');
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de Module1 - NotFoundCompo !!!');
  }

}
