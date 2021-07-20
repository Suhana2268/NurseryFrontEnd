import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/components.model/payment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cust:any;
  totalCost!:any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
    this.totalCost = sessionStorage.getItem('totalCost');
    console.log(this.totalCost);
  }

  getUser() {

    this.userService.getUser().subscribe(data =>
      {
        this.cust = data;
        console.log(this.cust);
      }, (error) => {
        alert("Something went wrong, Please try again!")
        console.log(error);
      })

  }



}
