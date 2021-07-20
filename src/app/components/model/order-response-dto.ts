export class OrderResponseDTO {

    bookingOrderId:number;
    orderDate: string;
    totalCost:number;
    orderStatus:number;
    email: string;
    orderId:number;
    quantity:number;
    pId:number;


  constructor(
    bookingOrderId: number, 
    orderDate: string, 
    totalCost: number, 
    orderStatus: number, 
    email: string, 
    orderId: number, 
    quantity: number, 
    pId: number
) {
    this.bookingOrderId = bookingOrderId
    this.orderDate = orderDate
    this.totalCost = totalCost
    this.orderStatus = orderStatus
    this.email = email
    this.orderId = orderId
    this.quantity = quantity
    this.pId = pId
  }

}
