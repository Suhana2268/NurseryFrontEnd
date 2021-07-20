import { Payment } from "src/app/components.model/payment";
import { Order } from "./order";

export class Transaction {

    transactionId:string;
    transactionMode:string;
    paymentStatus:String;
    order:Order;
    payment:Payment;


  constructor(
    transactionId: string, 
    transactionMode: string, 
    paymentStatus: String, 
    order: Order, 
    payment: Payment
) {
    this.transactionId = transactionId
    this.transactionMode = transactionMode
    this.paymentStatus = paymentStatus
    this.order = order
    this.payment = payment
  }

}


