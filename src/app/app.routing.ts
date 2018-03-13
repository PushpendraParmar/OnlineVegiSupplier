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

const MAIN_MENU_ROUTES: Routes=[
    { path:'',redirectTo:'/Home',pathMatch:'full' },
    { path:'Home', component: HomeComponent },
    { path:'WishList',component: WishListComponent },
    { path:'LoginSignUp',component:LoginSignUpComponent },
    { path:'Contact',component:ContactComponent },
    { path:'ShoppingCart',component:ShoppingCartComponent },
    { path:'Checkout',component:CheckoutComponent },
    { path:'Products',component:ProductsComponent },
    { path:'ProductDetails',component:ProductDetailsComponent },
    { path:'Aboutus',component:AboutusComponent },
    { path:'Faq',component:FaqComponent },
    { path:'ReturnPolicy',component:ReturnPolicyComponent },
    { path:'Terms',component:TermsConditionsComponent }

];

export const CONST_ROUTING= RouterModule.forRoot(MAIN_MENU_ROUTES);