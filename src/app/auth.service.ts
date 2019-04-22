import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false;
  // private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
    // localStorage.setItem('loggedIn','true');
  }

  get isLoggedIn(){
    return this.loggedInStatus;
    // return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  getUserDetails(username,password){
    // post these details to API server and return user info if correct
    // enter the url of the server
    // the server checks users input 
    return this.http.post<myData>('[url]',{
      username,
      password
    })
  }

  registerUser(username,password,cpassword){
    return this.http.post('/api/register',{
      username,
      password,
      cpassword
    })
  }
  // for security reasons you need to implement captcha
}
