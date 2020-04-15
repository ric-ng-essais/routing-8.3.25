import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialCompoComponent } from './composants/initial-compo/initial-compo.component';
import { Compo1Component } from './composants/compo1/compo1.component';
import { Compo2Component } from './composants/compo2/compo2.component';
import { Compo2BisComponent } from './composants/compo2-bis/compo2-bis.component';
import { OnlyForConnectedUserComponent } from './composants/onlyForConnectedUser/onlyForConnectedUser.component';

import { OnlyForConnectedUsersGuard } from './gardes/only-for-connected-users.guard';


const routes: Routes = [ // ATTENTION, les routes sont évaluées dans l'ordre,
                         // la première qui matche, l'emporte.

  // --------- Composants de AppModule ---------
  { path: '', // Pour lorsqu'on a juste d'écrit dans l'URL : l'URL du serveur, sans chemin.
    redirectTo: 'initial', // On choisit de rediriger vers la route "initial" définie ci-dessous.
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
  {
    path: 'membersPrivateZone',
    component: OnlyForConnectedUserComponent
  },
  */

  // - SYNTAXE 2, équivalente mais plus compacte
  //  (mais ce n'est PAS du Lazy loading ! juste une manière plus hiérarchisée de l'écrire)
  {
    path: '', // chemin racine pour les sous-chemins children ci-dessous.
    children: [
      {
        path: 'initial', // Chemin total = '' + '/initial'
        component: InitialCompoComponent
      },
      {
        path: 'compo1', // Chemin total = '' + '/compo1'
        component: Compo1Component
      },
      {
        path: 'compo2',
        children: [
          {
            path: '', // Chemin total = ''   + '/compo2' + ''
            component: Compo2Component
          },
          {
            path: 'bis',  // Chemin total = ''   + '/compo2' + '/bis'
            component: Compo2BisComponent
          }
        ]

      },
      {
        path: 'membersPrivateZone', // Chemin total = '' + '/membersPrivateZone'
        component: OnlyForConnectedUserComponent,
        canActivate: [OnlyForConnectedUsersGuard]
      },

    ]
  },



  // --------- Composants de Module1 ---------
  {
    path: 'myModule1',
    loadChildren: './modules/module1/module1.module#Module1Module'
  },


  // -----
  {
    path: 'test-multi-router-outlet',
    loadChildren: './modules/module3-multi-ro/module3-multi-ro.module#Module3MultiROModule'
  },


  {
    path: 'membersPrivateZon',
    component: OnlyForConnectedUserComponent,
    outlet: "r2"
  },


];


// ==================================================
@NgModule({
  imports: [RouterModule.forRoot(routes)], // <<<< forRoot et NON forChild, car AppModule.
  exports: [RouterModule]
})
export class AppRoutingModule { }
