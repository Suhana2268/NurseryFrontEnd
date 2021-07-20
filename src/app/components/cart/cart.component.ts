import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cartItem !: any[];
  productList : any[]=[];
  totalCost :number = 0;
  //deletedItem: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {

    this.cartService.displayCart().subscribe(data => {
      this.cartItem = data;
      console.log(this.cartItem);
      for (var index in this.cartItem) {

      console.log(this.cartItem[index].pId);
        this.cartService.getProductBypId(this.cartItem[index].pId).subscribe(data =>{
          
          this.productList.push(data);
          console.log(this.productList);
        let p = data
        console.log(p.cost);
          this.totalCost = (p.cost*this.cartItem[index].quantity)+this.totalCost;
          console.log(this.totalCost);
          console.log(data);

        
        }, (error)=> {
          alert("Something went wrong try again!");
          console.log(error);
        })
       
      }

      console.log(this.productList)
      sessionStorage.setItem('totalCost',this.totalCost.toString())

    })
    return this.productList;
  }

  /*deleteCartItem(pId:any):Observable<object>
  {
    console.log(pId);
    return this.deletedItem = this.cartService.removeFromCart(pId);
    
  }*/



}

