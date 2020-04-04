import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Compo1Component } from './composants/compo1/compo1.component';
import { InitialCompoComponent } from './composants/initial-compo/initial-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    InitialCompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
