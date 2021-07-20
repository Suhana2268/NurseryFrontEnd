
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageDetails } from '../model/image-details';
import { SeedDetails } from '../model/seed-details';
import { SeedService } from 'src/app/services/seed.service';
import { Order } from '../model/order';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.css']
})
export class SeedComponent implements OnInit {

  type!:string;
  type1 !:string;
  type2 !:string;
  addQuantityForm !: FormGroup;
  //seed !: SeedDetails;
  seeds !: SeedDetails[];
  images !: Observable<any>;
  image:ImageDetails= new ImageDetails();
  constructor(private activatedRouter:ActivatedRoute, private  seedService:SeedService, private userService:UserService, private cartService: CartService, private router: Router, private FormBuilder: FormBuilder) {
    this.type = this.activatedRouter.snapshot.params['AllSeeds'];
    this.type1 = this.activatedRouter.snapshot.params['Monocotyledonous'];
    this.type2 = this.activatedRouter.snapshot.params['Dicotyledonous'];
   }
   

  ngOnInit(): void {
    this.getSeedDetails(this.type);
    this.getUser();
    this.addQuantityForm = this.FormBuilder.group({
      quantity:["", [Validators.required]]
    })
  }
  getSeedDetails(type:string) {
    if(type === 'AllSeeds'){
      console.log("type:"+type)
      console.log("type:"+this.type1)
      this.seedService.getAllSeeds().subscribe(data=>{
        this.seeds = data;
        console.log("entire seeds = "+this.seeds)
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.seedService.getAllImages();

    }
    else if(this.type1 === "Monocotyledonous"){
      console.log("type:"+type)
      console.log("type:"+this.type1)
      this.seedService.getAllSeedsByType(this.type1).subscribe(data=>{
        this.seeds = data;
        console.log(this.seeds);
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.seedService.getAllImages();

    }
    else {
      console.log("type:"+type)
      console.log("type:"+this.type1)
      console.log("type:"+this.type2)
      this.seedService.getAllSeedsByType(this.type2).subscribe(data=>{
        this.seeds = data;
        console.log(this.seeds);
    },
    err=>
    {
      console.log(err.error);
    }
    );
    this.images = this.seedService.getAllImages();

    }
  
   }

   share(name:string) {
     
    console.log(name+" shared");
  }
  
  addToCart(pId:number) {
    console.log(pId);
    console.log('cart');
    var today = new Date();
    var month
    if((today.getMonth() + 1)<10){
      month="0"+(today.getMonth() + 1);
    }else{
      month=(today.getMonth() + 1);  
    }
    var dat
    if(today.getDate()<10){
      dat="0"+today.getDate()
    }
    else{
      dat=today.getDate()
    }
    var date = today.getFullYear() + '-' + month + '-' + dat;
    console.log("++++++++++++++++++Quantity"+this.addQuantityForm.get('quantity')?.value);
    var order = new Order("0", date, 0, 0, sessionStorage.getItem('userId')!, 0 , pId, this.addQuantityForm.get('quantity')?.value);
   
    console.log("cust",this.cust);
    console.log(order);
    this.cartService.addToCart(order).subscribe(data => {
      var placedOrder = data;
      this.router.navigate(["/cart"]);
    }, (error)=>{
      alert("Something went wrong try again!");
      console.log(error);
    })
  
    
  }
  cust:any;


  getUser() {

    this.userService.getUser().subscribe(data =>
      {
        this.cust = data;
      }, (error) => {
        alert("Something went wrong, Please try again!")
        console.log(error);
      })

  }

}
