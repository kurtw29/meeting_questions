import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstName: string;
  lastName: string;
  error: any;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.error = {
      firstName : null, lastName : null, email: null, password: null, confirmPassword: null
    }
   }

  ngOnInit() {
    this.error = "";
  }

  regProc(){
    console.log("register submitted")
  }
}
