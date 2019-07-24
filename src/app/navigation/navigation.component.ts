import { Component, OnInit } from '@angular/core';
import {IdentificationService} from "../identification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private serviceIdentification:IdentificationService,
              private router:Router) { }

  ngOnInit() {
  }

  seDeconnecter()
  {
    this.serviceIdentification.seDeconnecter();
    this.router.navigate(['/login']);
  }
  estConnecte()
  {
    return this.serviceIdentification.valeurUtilisateurCourant != null;
  }

  nomUtilisateur():String{
    if (this.estConnecte())
    {
  return this.serviceIdentification.valeurUtilisateurCourant.nom
    }
    else
      return '';
  }

}
