import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestMultiRouterOutletComponent } from './composants/test-multi-router-outlet/test-multi-router-outlet.component';
import { Compo30Component } from './composants/compo30/compo30.component';


import { OnlyForConnectedUserComponent } from 'src/app/composants/onlyForConnectedUser/onlyForConnectedUser.component';


const routes: Routes = [ // Routes évaluées dans l'ordre.
  {
    path: '',
    component: TestMultiRouterOutletComponent
  },

  {
    path: 'membersPrivateZon',
    component: Compo30Component,
    outlet: "r2"
  },
  {
    path: 'toto',
    component: Compo30Component,
    outlet: "xx"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3MultiRORoutingModule { }
