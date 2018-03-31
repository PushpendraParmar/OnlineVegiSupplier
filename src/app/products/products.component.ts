import { Component, OnInit } from '@angular/core';
//import { PRODTCTS } from '../MocData/moc-products';
import { ProductService } from "./../services/product.service";
import { ProductNode } from './ProductNode';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 products: ProductNode[]=[];
 
  
  constructor(private _productService: ProductService) {
	 
  }

  getProducts() { 
     this._productService.findProduct()
      .subscribe(
       lstresult => {
		   for(let i=0;i<2;i++){
          this.products[i] = new ProductNode();
          this.products[i].name =lstresult[i]["name"]; 
          this.products[i].price =lstresult[i]["price"];
          this.products[i].imageName =lstresult[i]["imageName"];
		   }
      },
      error => {
        console.log("Error. The findProduct result JSON value is as follows:");
        console.log(error);
      }
      );
	  
  }
  
  ngOnInit() {
//this.products = this.callProductService();
	this.getProducts();

  }

}
