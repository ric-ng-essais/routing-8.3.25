import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Compo1Component } from './composants/compo1/compo1.component';
import { Compo2Component } from './composants/compo2/compo2.component';
import { NotFoundCompoComponent } from './composants/not-found-compo/not-found-compo.component';
import { Compo3UrlParameteredComponent } from './composants/compo3-url-parametered/compo3-url-parametered.component';


@NgModule({
  declarations: [
      Compo1Component,
      Compo2Component,
      Compo3UrlParameteredComponent,
      NotFoundCompoComponent
  ],

  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module {
  constructor() {
    console.log('\n\n** ICI CONSTRUCTOR de Module1 ! **\n\n');
  }
}
