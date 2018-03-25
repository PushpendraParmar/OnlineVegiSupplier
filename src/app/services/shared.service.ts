import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { NgForm } from '@angular/forms';
 
@Injectable()
export class SharedService {
    productUrl = "http://localhost:8080/supplier/product/products";
    baseUrl = "http://localhost:8080/supplier/";
    constructor(private _http: Http) {


     }
 
 
  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
	headers.append('Access-Control-Allow-Origin', 'true');
    return headers;
  }


    findProduct() { 
        return this._http.get(this.productUrl,{headers: this.getHeaders()})
            .map(response => {
                { return response.json() };
            })
            .catch(error => Observable.throw(error.json()));
    }
 
    doRegisterUser(){
        return this._http.post(this.baseUrl,{headers:this.getHeaders()})
        .map(response => {{return response.json()};})
        .catch(error => Observable.throw(error.json()));
    }

    doLoginUser(loginForm : NgForm){
        console.log("service invoked");
        return this._http.post(this.baseUrl+"login",loginForm.value,{headers:this.getHeaders()})
        .map(response => {{
            console.log(response);
            return response.json()};
        })
        .catch(error => Observable.throw(error.json()));
    }
    
}