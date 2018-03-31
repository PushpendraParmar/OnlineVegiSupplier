import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnquiryService } from "./../services/enquiry.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msg:string='';
  constructor(private _enquiryService: EnquiryService) { }

  ngOnInit() {
  }
  // saveEnquiry(enquiryForm: NgForm): void{
  //   console.log(enquiryForm.value);
  // }

  saveEnquiry(formData: any): void{
    console.log(formData.value);
   this._enquiryService.saveEnquiry(formData.value)
   .subscribe(
     data=>{
          if(data){
              this.msg="Thanks for the enquiry";
          }
    },
   error => {
     console.log("Error. The enquiry is not saved. The result JSON value is as follows:");
     console.log(error);
   }
   );
  }
  

  

}
