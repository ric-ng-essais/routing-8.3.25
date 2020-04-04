import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Compo1Component } from './composants/compo1/compo1.component';
import { Compo2Component } from './composants/compo2/compo2.component';
import { NotFoundCompoComponent } from './composants/not-found-compo/not-found-compo.component';
import { Compo3UrlParameteredComponent } from './composants/compo3-url-parametered/compo3-url-parametered.component';


const routes: Routes = [
  {
    path: 'compo1',
    component: Compo1Component // Composant compo1, du Module1 et non de AppModule !
  },
  {
    path: 'compo2',
    component: Compo2Component // Composant compo2, du Module1 et non de AppModule !
  },
  {
    path: 'compo3/:parametre1/:parametre2',
    component: Compo3UrlParameteredComponent
  },
  {
    path: '**', // Rien ci-dessus n'ayant matché
    component: NotFoundCompoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
