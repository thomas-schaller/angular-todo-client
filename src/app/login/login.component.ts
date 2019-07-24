import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../utilisateur";
import {IdentificationService} from "../identification.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateurCourant:Utilisateur = new Utilisateur();
  message:String = '';
  erreur:String = '';
  urlPrecedente:String;
  constructor(private serviceIdentification: IdentificationService,
              private route: ActivatedRoute,
              private router: Router) {
    this.urlPrecedente= this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit() {
  }

  seConnecter() {
    if (this.utilisateurCourant.motdePasse !== null && this.utilisateurCourant.nom !== null) {
    }
    this.serviceIdentification.seConnecter(this.utilisateurCourant).subscribe( resultat => {
      if (resultat ){
      this.router.navigate( [this.urlPrecedente]);
  }
      else
      {
        this.erreur='mauvais nom d\'utilisateur ou mot de passe !';
        this.message ='';
        this.utilisateurCourant.motdePasse ='';
      }

  },error =>{
      this.message='';
      this.erreur = error.message;
      this.utilisateurCourant.motdePasse ='';
    });
  }

}
