import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AppService {
  url = 'https://api.github.com/users/';
  
  constructor(public http: HttpClient) {}

 public getUser(gitUserName):Observable<any> {
    return this.http.get<any>(this.url + gitUserName).pipe( 
      retry(1),
    catchError(this.userError)
    );
  }

  public userError(err:HttpErrorResponse){

    let errMsg:string;
    if(err.error instanceof ErrorEvent){
      //client Error
      errMsg=`Message: ${err.error.message}`;
    }
    else{
       //server Error
       errMsg=`STATUS : ${err.status} ,MESSAGE: ${err.message}`
    }
    return throwError(errMsg);
  }
}
