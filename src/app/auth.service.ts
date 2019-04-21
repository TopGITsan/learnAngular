import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username,password){
    // post these details to API server and return user info if correct
    // enter the url of the server
    // the server checks users input 
    return this.http.post('[url]',{
      username,
      password
    })
  }
}
