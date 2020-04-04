import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialCompoComponent } from './composants/initial-compo/initial-compo.component';
import { Compo1Component } from './composants/compo1/compo1.component';
import { Compo2Component } from './composants/compo2/compo2.component';
import { Compo2BisComponent } from './composants/compo2-bis/compo2-bis.component';


const routes: Routes = [ // ATTENTION, les routes sont évaluées dans l'ordre,
                         // la première qui matche, l'emporte.

  // --------- Composants de AppModule ---------
  { path: '', //Lorsque juste écrit dans l'URL, l'URL du serveur, sans chemin.
    redirectTo: 'initial', //Route définie ci-dessous.
    pathMatch: 'full'
  },

  // - SYNTAXE 1 - barbare, avec redondance !
  /*
  {
    path: 'initial',
    component: InitialCompoComponent
  },
  {
    path: 'compo1',
    component: Compo1Component
  },
  {
    path: 'compo2',
    component: Compo2Component
  },
  {
    path: 'compo2/bis',
    component: Compo2BisComponent
  },
  */

  // - SYNTAXE 2, équivalente mais plus compacte
  //  (mais ce n'est PAS du Lazy loading ! juste une manière plus hiérarchisée de l'écrire)
  {
    path: '',
    children: [
      {
        path: 'initial',
        component: InitialCompoComponent
      },
      {
        path: 'compo1',
        component: Compo1Component
      },
      {
        path: 'compo2',
        children: [
          {
            path: '', //Pour route : 'compo2'
            component: Compo2Component
          },
          {
            path: 'bis', //Pour route : 'compo2/bis'
            component: Compo2BisComponent
          }
        ]

      },
    ]
  },



  // --------- Composants de Module1 ---------
  {
    path: 'myModule1',
    loadChildren: './modules/module1/module1.module#Module1Module'
  }
];


// ==================================================
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
