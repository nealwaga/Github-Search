import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReposService {

  user = 'nealwaga'
  BASE_REPO_URL = `https://api.github.com/users/${this.user}/repos`

  constructor (private http: HttpClient) { }

  getUserRepo (): Observable<any> {
    return this.http.get<any> (this.BASE_REPO_URL)
  }
}
