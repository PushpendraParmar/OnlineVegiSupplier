import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  

}
