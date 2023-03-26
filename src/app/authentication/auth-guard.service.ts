import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
import { MessageService } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators'; 
import { environment } from 'src/environments/environment';

declare var libSigasi: any;

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  isLoggedIn = false;

  constructor(private router: Router, private messageService: MessageService, ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {   
      let activate: boolean = libSigasi.getSigasiModule().isAuthorized(environment.APP,route.routeConfig?.path);
      if (!activate) {
          alert('O usuário logado não possui permissão de acesso a funcionalidade!');
      }
      return activate; 
  }
  
  login(): Observable<boolean> {
    return of(true).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = libSigasi.getSigasiModule().isAuthenticated())
        );
  }
}