import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class AppService {
  url = 'https://api.github.com/users/';
  
  constructor(public http: HttpClient) {}

  getUser(gitUserName) {
    return this.http.get(this.url + gitUserName);
  }
}
