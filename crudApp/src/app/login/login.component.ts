import { user } from './../dataObj';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  user : user = new user;
  loginCheck : user = new user;
  loginMessage : any = "Login required";

  ngOnInit(): void {
    
    this.loginStatus();
  }

  login(){
    this.user.name = (<HTMLInputElement>document.getElementById('login')).value;
    this.user.password = (<HTMLInputElement>document.getElementById('password')).value;

    if(this.user.name != null && this.user.password != null && this.user.name.length > 2 && this.user.password.length > 2){
      
      localStorage.setItem("currentUser", JSON.stringify(this.user));

    }
    else{
      alert("Túl rövid a felhasználó név vagy a jelszó! \nMinimum 3 karakterből kell állniuk!");
    }
    this.loginStatus();

  
  }

  loginStatus(){
    this.loginCheck = JSON.parse(localStorage.getItem('currentUser') || '{}') as user;
    if(this.loginCheck.name === "admin" && this.loginCheck.password === "admin"){
      this.loginMessage = "Logged in as admin";
    }
    else{
      this.loginMessage = "Login required";
  }
  }
}
