import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Compo1Component } from './composants/compo1/compo1.component';
import { InitialCompoComponent } from './composants/initial-compo/initial-compo.component';
import { Compo2Component } from './composants/compo2/compo2.component';
import { Compo2BisComponent } from './composants/compo2-bis/compo2-bis.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    InitialCompoComponent,
    Compo2Component,
    Compo2BisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.clear();
    console.log('\n\n** ICI CONSTRUCTOR de AppModule ! **\n\n');
  }
}
