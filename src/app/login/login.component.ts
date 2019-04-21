import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(evet) {
    event.preventDefault();

    const target = event.target as HTMLElement;
    const username = (target.querySelector('#user') as HTMLInputElement).value;
    const password = (target.querySelector('#user') as HTMLInputElement).value;

    this.Auth.getUserDetails(username,password).subscribe((data:any) =>{
      if(data.success) {
        // redirect the user to /admin
      } else {
        window.alert("Invalid credentials");
      }
    })
    console.log(username, password);
  }


}
