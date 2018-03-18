import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent} from './menu/menu.component';
import { WishListComponent} from './wish-list/wish-list.component';
import { LoginSignUpComponent} from './login-sign-up/login-sign-up.component';
import { HomeComponent} from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { LoginComponent } from './login/login.component';

const MAIN_MENU_ROUTES: Routes=[
    { path:'',redirectTo:'/home',pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'wishList',component: WishListComponent },
    { path:'loginSignUp',component:LoginSignUpComponent },
    { path:'contact',component:ContactComponent },
    { path:'shoppingcart',component:ShoppingCartComponent },
    { path:'checkout',component:CheckoutComponent },
    { path:'products',component:ProductsComponent },
    { path:'productDetails',component:ProductDetailsComponent },
    { path:'aboutus',component:AboutusComponent },
    { path:'faq',component:FaqComponent },
    { path:'returnPolicy',component:ReturnPolicyComponent },
    { path:'terms',component:TermsConditionsComponent },
    { path:'login',component:LoginComponent }

];

export const CONST_ROUTING= RouterModule.forRoot(MAIN_MENU_ROUTES);