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
import { authInterceptorProviders, AuthJwtInterceptor } from './Interceptor/auth-jwt.interceptor';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OrderComponent } from './components/order/order.component';
import { CartComponent } from './components/cart/cart.component';
import { AddressComponent } from './components/address/address.component';
import { PlantsComponent } from './components/plants/plants.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SeedComponent } from './components/seed/seed.component';
import { ViewSeedComponent } from './components/view/view-seed/view-seed.component';
import { ViewPlantComponent } from './components/view/view-plant/view-plant.component';
import { ViewPlanterComponent } from './components/view/view-planter/view-planter.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlanterComponent } from './components/planter/planter.component';



const appRoutes:Routes=[
  {path:'login',component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'admin', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path: 'order', component: OrderComponent},
  {path: 'cart', component: CartComponent},
  {path: 'address', component: AddressComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'seed', component: SeedComponent},
  {path: 'seed/:AllSeeds', component: SeedComponent},
  {path: 'seed/type1/:Monocotyledonous', component: SeedComponent},
  {path: 'seed/type2/:Dicotyledonous', component: SeedComponent},
  {path: 'plants/:AllPlants', component: PlantsComponent},
  {path: 'plants/type1/:Herbal', component: PlantsComponent},
  {path: 'plants/type2/:Medical', component: PlantsComponent},
  {path: 'planters/:AllPlanters', component: PlanterComponent},
  {path: 'planters/shape1/:Round', component: PlanterComponent},
  {path: 'planters/shape2/:Square', component: PlanterComponent},
  {path: 'viewSeed/:seedId', component: ViewSeedComponent},
  {path: 'viewPlant/:plantId', component: ViewPlantComponent},
  {path: 'viewPlanter/:planterId', component: ViewPlanterComponent},
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
    SeedComponent,
    ViewSeedComponent,
    ViewPlantComponent,
    ViewPlanterComponent,
    AdminComponent,
    PlanterComponent,
    
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
    authInterceptorProviders],
  bootstrap: [AppComponent],
  
})
export class AppModule { }