import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData{
  success: boolean,
  message: string
}

interface isLoggedIn{
  status: boolean
}

interface logoutStatus{
  success: boolean
}

interface userData{
  email: string,
  status: boolean,
  quote: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData(){
    return this.http.get<myData>('/api/login')
  }

  getData(){
    return this.http.get<userData>('/api/datac')
  }

  isLoggedIn(){
    return this.http.get<isLoggedIn>('/api/isloggedin');
  }

  logout(){
    return this.http.get<logoutStatus>('/api/logout');
  }
}
