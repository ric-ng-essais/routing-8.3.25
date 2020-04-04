import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-compo3-url-parametered',
  templateUrl: './compo3-url-parametered.component.html',
  styleUrls: ['./compo3-url-parametered.component.css']
})
export class Compo3UrlParameteredComponent implements OnInit {

  sUrlParam1: string;
  sUrlParam2: string;

  constructor(private oActivatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const oActivatedRouteSnapshot: ActivatedRouteSnapshot
      = this.oActivatedRoute.snapshot;
   /*
    this.sUrlParam1 = oActivatedRouteSnapshot.params['parametre1'];
    this.sUrlParam2 = oActivatedRouteSnapshot.params['parametre2'];
   */
   // Autre syntaxe :
    // this.sUrlParam1 = oActivatedRouteSnapshot.paramMap.get('parametre1');
    // this.sUrlParam2 = oActivatedRouteSnapshot.paramMap.get('parametre2');

    this.oActivatedRoute.paramMap.subscribe((pParams)=>{
       this.sUrlParam1 = pParams.get('parametre1');
       this.sUrlParam2 = pParams.get('parametre2');
    });

  }

}
