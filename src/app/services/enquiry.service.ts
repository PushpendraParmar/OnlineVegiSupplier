import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
 
@Injectable()
export class EnquiryService {
    baseUrl = "http://localhost:8080/food_supplier/enquiry";
    constructor(private _http: Http) { }
 
 
  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
	headers.append('Access-Control-Allow-Origin', 'true');
    return headers;
  }


    saveEnquiry(enquiry) { 
        return this._http.post(this.baseUrl+"/save",enquiry,{headers: this.getHeaders()})
        .map(response => {
                 { return response.json() };
             })
            //.catch(error => Observable.throw(error.json()));
        };
    
 
    
}