import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {IdentificationService} from "./identification.service";

/**  */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private identificationService:IdentificationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const utilisateurCourant = this.identificationService.valeurUtilisateurCourant;
    if ( utilisateurCourant )
    {
      const encodedString = btoa(utilisateurCourant.nom +':'+ utilisateurCourant.motdePasse);
      req = req.clone({ setHeaders: { Authorization: "Basic "+encodedString  ,realm: "thomasschaller"} });

    }
    else
    {
      req = req.clone({ setHeaders: { realm: "thomasschaller"} });
    }
    return next.handle(req);
  }
}

