import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListeTachesListComponent} from "./liste-taches-list/liste-taches-list.component";
import {IdentificationGuard} from "./identification.guard";


const routes: Routes = [
  {
    path: 'login', component: LoginComponent  },
  { path: 'listes', component: ListeTachesListComponent,canActivate: [IdentificationGuard] },
  {  path: '**', redirectTo:'listes'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
