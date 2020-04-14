import { Observable } from 'rxjs';

export interface ICompoWithQuitGuard {
  onDemandeQuitRoute(): void;

  isAutoriseQuitRoute(): boolean;
  isAutoriseQuitRouteAsObservable(): Observable<boolean>;
}
