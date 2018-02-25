import { Component, OnInit } from '@angular/core';
import { PRODTCTS } from '../MocData/moc-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 products=PRODTCTS;

  constructor() {

   }

  ngOnInit() {

  }

}
