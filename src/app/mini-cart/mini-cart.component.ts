import { Component, OnInit } from '@angular/core';
import { CartItems } from '../MocData/moc-shoppingcart';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {

  //products: ProductNode[]=[];
  cartItems= CartItems;
  constructor() { }
  //this.products = this.callProductService();
  ngOnInit() {

  }

}
