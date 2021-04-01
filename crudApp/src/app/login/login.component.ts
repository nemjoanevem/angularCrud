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

  ngOnInit(): void {
  }

  login(){
    
    if(this.user.name && this.user.password && this.user.name.length > 2 && this.user.password.length > 2){
      this.user.name = (<HTMLInputElement>document.getElementById('login')).value;
      this.user.password = (<HTMLInputElement>document.getElementById('password')).value;
    }
    else{
      alert("Túl rövid a felhasználó név vagy a jelszó! \nMinimum 3 karakterből kell állniuk!");
    }
  
  }
}
