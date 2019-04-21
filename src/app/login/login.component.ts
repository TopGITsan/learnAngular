import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();

    const target = event.target as HTMLElement;
    const username = (target.querySelector('#user') as HTMLInputElement).value;
    const password = (target.querySelector('#user') as HTMLInputElement).value;

    this.Auth.getUserDetails(username,password).subscribe(data =>{
      if(data && data.success) {
        // redirect the user to /admin
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert("Invalid credentials");
        this.Auth.setLoggedIn(false);
      }
    })
    console.log(username, password);
  }

}
