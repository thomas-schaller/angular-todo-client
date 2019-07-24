import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Utilisateur} from "./utilisateur";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {
  private utilisateurCourantSubject: BehaviorSubject<Utilisateur>;
  public utilisateurCourant:Observable<Utilisateur>;
  private urlUtilisateurs="http://localhost:8080/utilisateurs";

  constructor(private http: HttpClient) {
    this.utilisateurCourantSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser')));
    this.utilisateurCourant = this.utilisateurCourantSubject.asObservable();
  }

  public get valeurUtilisateurCourant(): Utilisateur {
    return this.utilisateurCourantSubject.value;
  }



  seConnecter(utilisateur:Utilisateur):Observable<boolean>{
    const copieUtilisateur:Utilisateur = new Utilisateur();
    copieUtilisateur.motdePasse=window.btoa(utilisateur.motdePasse);
    copieUtilisateur.nom=utilisateur.nom;
    const url= `${this.urlUtilisateurs}/connexion`;
    return this.http.post<boolean>(url,copieUtilisateur).pipe(map(resultat => {
      if (resultat) {
        // sauvegarde de l'utilisateur dans le stockage locage pour garder l'utilisateur connecté en cas de rafraichissement
        localStorage.setItem('currentUser', JSON.stringify(utilisateur));
        this.utilisateurCourantSubject.next(utilisateur);
      }
      return resultat;
    }));
  }

  seDeconnecter()
  {
    // suppression de l'utilisateur de l'espace de stockage local
    localStorage.removeItem('currentUser');
    this.utilisateurCourantSubject.next(null);
  }

}
