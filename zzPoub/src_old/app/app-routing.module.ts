import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Compo1Component } from './composants/compo1/compo1.component';
import { InitialCompoComponent } from './composants/initial-compo/initial-compo.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'initial',
    pathMatch: 'full'
  },
  {
    path: 'initial',
    component: InitialCompoComponent
  },
  {
    path: 'compo1',
    component: Compo1Component
  },

  {
    path: 'myModule1',
    loadChildren: './modules/module1/module1.module#Module1Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
