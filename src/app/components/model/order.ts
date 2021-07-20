import { User } from "./user";

export class Order {

    bookingOrderId:string;
    orderDate: string;
    totalCost:number;
    orderStatus:number;
    userId: string;
    orderId:number;
    pId:number;
    quantity:number;




  constructor(
    bookingOrderId: string, 
    orderDate: string, 
    totalCost: number, 
    orderStatus: number, 
    userId: string, 
    orderId: number, 
    pId: number, 
    quantity: number
) {
    this.bookingOrderId = bookingOrderId
    this.orderDate = orderDate
    this.totalCost = totalCost
    this.orderStatus = orderStatus
    this.userId = userId
    this.orderId = orderId
    this.pId = pId
    this.quantity = quantity
  }
 
  
}
