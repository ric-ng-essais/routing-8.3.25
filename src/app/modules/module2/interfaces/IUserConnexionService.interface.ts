import { InjectionToken } from '@angular/core';

export interface IUserConnexionService {
  isCurrentUserConnected(): boolean;
  connectCurrentUser(): void;
  disconnectCurrentUser(): void;
}
