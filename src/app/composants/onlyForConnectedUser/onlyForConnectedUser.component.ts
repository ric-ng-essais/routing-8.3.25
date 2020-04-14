import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-OnlyForConnectedUserComponent',
  templateUrl: './onlyForConnectedUser.component.html',
  styleUrls: ['./onlyForConnectedUser.component.css']
})
export class OnlyForConnectedUserComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('\n\n---------------------------------\n\n');
    console.log('ICI constructor de AppModule - OnlyForConnectedUserComponent !!!');
  }

  ngOnInit() {
    console.log('ICI ngOnInit de AppModule - OnlyForConnectedUserComponent !!!');
  }

  ngOnDestroy() {
    console.log('ICI ngOnDestroy de AppModule - OnlyForConnectedUserComponent !!!');
  }

}
