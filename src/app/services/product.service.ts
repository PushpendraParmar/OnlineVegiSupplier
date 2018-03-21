import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
 
@Injectable()
export class ProductService {
    productUrl = "http://localhost:2000/supplier/product/products";
    constructor(private _http: Http) { }
 
 
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
 
    
}