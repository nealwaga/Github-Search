import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  username: string

  constructor (private http:HttpClient) {
    this.username = 'nealwaga'
  }

//function for finding user
  findUser () {
    return this.http.get ("https://api.github.com/users/" + this.username).pipe (map (result => result))
  }

//function for finding repositories
  findRepo () {
    return this.http.get ("https://api.github.com/users/" + this.username + "/repos").pipe (map (result => result))
  }

//function for in case of an update from the user  
  anUpdate (username: string) {
    this.username = username
  }
}
