import { Injectable } from '@angular/core';

import { IUserConnexionService } from '../interfaces/IUserConnexionService.interface';

@Injectable({
  providedIn: 'root'
})
export class UserConnexionService implements IUserConnexionService {

  private _sCurrentUserConnectedKey: string = "bCurrentUserConnected";
  private _sCurrentUserConnectedStateValue: string = "1";
  private _sCurrentUserDisconnectedStateValue: string = "0";

  constructor() {
    console.log('\n ---- ICI constructor de UserConnexionService ----\n');
  }

  isCurrentUserConnected(): boolean {
    return(this._getCurrentUserConnexionStateValue() === this._sCurrentUserConnectedStateValue);
  }
  private _getCurrentUserConnexionStateValue(): string | null {
    return( sessionStorage.getItem(this._sCurrentUserConnectedKey) );
  }
  connectCurrentUser(): void {
    sessionStorage.setItem(this._sCurrentUserConnectedKey, this._sCurrentUserConnectedStateValue);
  }
  disconnectCurrentUser(): void {
    sessionStorage.setItem(this._sCurrentUserConnectedKey, this._sCurrentUserDisconnectedStateValue);
  }

}
