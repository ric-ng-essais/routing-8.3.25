import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Compo1Component } from './composants/compo1/compo1.component';
import { InitialCompoComponent } from './composants/initial-compo/initial-compo.component';
import { Compo2Component } from './composants/compo2/compo2.component';
import { Compo2BisComponent } from './composants/compo2-bis/compo2-bis.component';
import { OnlyForConnectedUserComponent } from './composants/onlyForConnectedUser/onlyForConnectedUser.component';


import { Module2Module } from './modules/module2/module2.module';
import { UserConnexionService } from './modules/module2/services/user-connexion.service';


@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    InitialCompoComponent,
    Compo2Component,
    Compo2BisComponent,
    OnlyForConnectedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: AppModule.getProviders(),
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.clear();
    console.log('\n\n** ICI CONSTRUCTOR de AppModule ! **\n\n');
  }

  static getProviders(): Array<Provider> {
    return([
       {
        provide: Module2Module.getUserConnexionServiceInjectionToken(),
        useClass: UserConnexionService //Choix de la classe concrète à instancier.
      }
    ]);
  }
}
