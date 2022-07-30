import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm= this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  loginUser() {
    this.authService.login(this.loginForm.value)
  }
  // isUserAuthenticated(){
  //   const token = localStorage.getItem('access_token');
  //   if(token&&!this..isTokenExpired(token)){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
}