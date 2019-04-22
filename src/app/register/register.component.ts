import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  auth: AuthService;

  constructor( auth: AuthService) { 
    this.auth = auth;
  }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault();

    const errors = [];

    const target = event.target as HTMLElement;
    const username = (target.querySelector('#user') as HTMLInputElement).value;
    const password = (target.querySelector('#pwd') as HTMLInputElement).value;
    const cpassword = (target.querySelector('#cpwd') as HTMLInputElement).value;

    if (password !== cpassword){
      errors.push("Passwords do not match");
    }

    // more validation

    if(errors.length > 0){

    }

    console.log(username, password);
  }

}
