import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';

import { IUserConnexionService } from './interfaces/IUserConnexionService.interface';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module {
  private static _oUserConnexionServiceInjectionToken: InjectionToken<IUserConnexionService> = null;

  static getUserConnexionServiceInjectionToken(): InjectionToken<IUserConnexionService> {
    if (this._oUserConnexionServiceInjectionToken === null) {
      this._oUserConnexionServiceInjectionToken = new InjectionToken<IUserConnexionService>("xxx");
    }
    return(this._oUserConnexionServiceInjectionToken);
  }
}
