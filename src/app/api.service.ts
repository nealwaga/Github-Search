import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user = 'nealwaga'    //created a variable 
  GH_API = `https://api.github.com/users/defunkt/${this.user}`  //made it a template variable using backticks 

  constructor (private http: HttpClient) { }

  //created github user 
  getGithubUser (): Observable<any> {
    return this.http.get<any> (this.GH_API)
  }
}
