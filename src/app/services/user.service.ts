import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }


  getUserList(): Observable<any> {
    return this.http.get(`user/getUserList`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }



  getUserData(userId: Number): Observable<any> {
    return this.http.get(`user/getUser/` + userId);
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage="";
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        errorMessage =  `Backend returned code ${error.status} - ${error.statusText} , body was: ${error.message} `, error.error;
    }
    // Return an observable with a user-facing error message.
    if(errorMessage=="")
    errorMessage='Something bad happened; please try again later.';
    return throwError(() => new Error(errorMessage));
  }

}
