import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ListeTaches} from "./listeTaches";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http: HttpClient) { }

  private urlListeTaches = 'http://localhost:8080/taches'; // URL to the web api

  getListesTaches():Observable<ListeTaches[]> {

    return this.http.get<ListeTaches[]>(this.urlListeTaches).pipe(catchError(this.gererErreur));
  }

  update(listeTaches: ListeTaches): Observable<ListeTaches> {
    return this.http.put<ListeTaches>(this.urlListeTaches,listeTaches);
  }

  create(listeTaches: ListeTaches): Observable<ListeTaches>  {
    return this.http.post<ListeTaches>(this.urlListeTaches,listeTaches);
  }

  delete( listeTaches: ListeTaches | number ):void{
    const id = typeof listeTaches === 'number' ? listeTaches : listeTaches.id;
    const url = `${this.urlListeTaches}/${id}`;
    this.http.delete(url);
  }

  /** GET task by id. Will 404 if id not found */
  getListeTaches(id: number): Observable<ListeTaches> {
    const url = `${this.urlListeTaches}/${id}`;
    return this.http.get<ListeTaches>(url);

  }

  private gererErreur(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
