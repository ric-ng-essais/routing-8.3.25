import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3MultiRORoutingModule } from './module3-multi-ro-routing.module';
import { TestMultiRouterOutletComponent } from './composants/test-multi-router-outlet/test-multi-router-outlet.component';
import { Compo30Component } from './composants/compo30/compo30.component';


@NgModule({
  declarations: [TestMultiRouterOutletComponent, Compo30Component],
  imports: [
    CommonModule,
    Module3MultiRORoutingModule
  ]
})
export class Module3MultiROModule { }
