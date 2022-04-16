import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName:string;


  constructor(private http:HttpClient) {
    console.log("Service is ready");
    this.userName = "melissakobia";
   }


  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?clientId=" + environment.clientId
     + "&clientSecret=" +environment.clientSecret);
  }

  getRepoInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?clientId=" + environment.clientId + "&clientSecret=" +environment.clientSecret);
  }


}