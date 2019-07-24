import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {IdentificationService} from "./identification.service";

@Injectable({
  providedIn: 'root'
})
export class IdentificationGuard implements CanActivate {
  constructor(private serviceIdentification:IdentificationService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const utilisateurCourant = this.serviceIdentification.valeurUtilisateurCourant;
    if (utilisateurCourant) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;

  }
  
}
