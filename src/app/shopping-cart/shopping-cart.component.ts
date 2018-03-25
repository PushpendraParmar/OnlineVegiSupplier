import { Component, OnInit } from '@angular/core';
import { CartItems } from '../MocData/moc-shoppingcart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems= CartItems;
  constructor() { }

  ngOnInit() {
  }

}
