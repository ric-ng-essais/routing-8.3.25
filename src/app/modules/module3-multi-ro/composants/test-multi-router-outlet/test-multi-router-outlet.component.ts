import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-multi-router-outlet',
  templateUrl: './test-multi-router-outlet.component.html',
  styleUrls: ['./test-multi-router-outlet.component.css']
})
export class TestMultiRouterOutletComponent implements OnInit {

  constructor(private oRouter: Router) { }

  ngOnInit() {
  }


  loadComponent() {
    //this.oRouter.navigateByUrl("(PourRouterOutlet_2:composant0_DuModule3)");
    this.oRouter.navigateByUrl("composant0_DuModule3");

  }

}
