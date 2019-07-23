import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ListeTachesListComponent } from './liste-taches-list/liste-taches-list.component';
import {
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatTreeModule
} from "@angular/material";
import { AuthInterceptor } from './auth-interceptor';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeTachesListComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTreeModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
