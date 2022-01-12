import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userCredential } from 'src/app/classes/userCredential';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  user : userCredential = {
    email: '',
    password: '',
    userName: ''

  };
 
  constructor( private loginfirebase: AuthService, private Router: Router) { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  loginAdmin(arg1: string, arg2: string){
    this.loginfirebase.logIn(arg1, arg2)
  .then(()=>
  this.Router.navigate(["categoryList"]))
  .catch((error)=>{
    alert(error.message)
  })
    
  }

}
