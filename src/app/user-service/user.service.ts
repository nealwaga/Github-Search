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

// function getting user info using API
  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?clientId=" + environment.clientId
     + "&clientSecret=" +environment.clientSecret);
  }

// function getting user repos  
  getRepoInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?clientId=" + environment.clientId + "&clientSecret=" +environment.clientSecret);
  }

   // getUserInfo() {
  //   return this.http.get("https://api.github.com/repos/users/"+this.userName+"/issues?state=closed&access_token=945f965fc6d9c2c28798a70431e7dc37121d321f");
  // }

  // getRepoInfo(){
  //   return this.http.get("https://api.github.com/repos/users/"+this.userName+"/repos/issues?state=closed&access_token=945f965fc6d9c2c28798a70431e7dc37121d321f");
  // }


// function updating the username when searching
  updateUser (userName : string) {
    this.userName = userName;


  }


}