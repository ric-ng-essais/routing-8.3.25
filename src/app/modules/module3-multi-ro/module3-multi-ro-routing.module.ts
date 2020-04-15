import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestMultiRouterOutletComponent } from './composants/test-multi-router-outlet/test-multi-router-outlet.component';
import { Compo30Component } from './composants/compo30/compo30.component';


const routes: Routes = [ // Routes évaluées dans l'ordre.
  {
    path: '',
    component: TestMultiRouterOutletComponent
  },

  {
    path: 'composant0_DuModule3',
    component: Compo30Component,
    outlet: "xx"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3MultiRORoutingModule { }
