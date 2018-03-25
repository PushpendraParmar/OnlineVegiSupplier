import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.css']
})
export class LoginSignUpComponent implements OnInit {


  constructor(private _sharedService: SharedService) { 

    console.log();
  }

  ngOnInit() {
  }

  onRegister(userRegister : NgForm): void{
    console.log(userRegister.value);
    this._sharedService.doRegisterUser();
  }

  onLogin(userLogin : NgForm): void{
    console.log(userLogin.value);
    this._sharedService.doLoginUser(userLogin).subscribe(
      lstresult => {
      console.log(lstresult);
      
     },
     error => {
       console.log("Error. The findProduct result JSON value is as follows:");
       console.log(error);
     }
     );
  }

}
