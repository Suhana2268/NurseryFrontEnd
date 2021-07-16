import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthJwtInterceptor } from './Interceptor/auth-jwt.interceptor';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { AddressComponent } from './components/address/address.component';
import { PlantsComponent } from './components/plants/plants.component';
import { PaymentComponent } from './components/payment/payment.component';


const appRoutes:Routes=[
  {path:'login',component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path: 'order', component: OrderComponent},
  {path: 'cart', component: CartComponent},
  {path: 'address', component: AddressComponent},
  {path: 'payment', component: PaymentComponent},
  {path:'**', component: HomeComponent},
  

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    CartComponent,
    AddressComponent,
    PlantsComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    IvyCarouselModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

    
   
  ],
  providers: [NgbCarouselConfig,
    AuthJwtInterceptor],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
