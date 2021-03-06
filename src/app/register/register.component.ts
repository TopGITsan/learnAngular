import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  auth: AuthService;

  constructor( auth: AuthService, private router: Router) { 
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

    if(errors.length === 0){
      this.auth.registerUser(username,password).subscribe(data =>{
        console.log(data);
        if(data.success){
          this.router.navigate(['dashboard'])
        }
      })
    }

    console.log(username, password);
  }

}
