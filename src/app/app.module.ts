import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CONST_ROUTING } from './app.routing';
import { ContactComponent } from './contact/contact.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
//import { SharedService } from "./services/shared.service";
import { ProductService } from "./services/product.service";
import { EnquiryService } from "./services/enquiry.service";


import { ProductModel  } from './Model/ProductModel';
import { PRODTCTS  } from './MocData/moc-products';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { LoginComponent } from './login/login.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginSignUpComponent,
    WishListComponent,
    ContactComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AboutusComponent,
    FaqComponent,
    ReturnPolicyComponent,
    TermsConditionsComponent,
    LoginComponent,
    MiniCartComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [ProductService,EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
