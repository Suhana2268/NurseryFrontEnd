export class Payment {

    paymentId:string;
    bankName:string;
    cvv:number;
    expireDate:string;
    totalCost:number;
    orderId:number;


  constructor(
    paymentId: string, 
    bankName: string, 
    cvv: number, 
    expireDate: string, 
    totalCost: number, 
    orderId: number
) {
    this.paymentId = paymentId
    this.bankName = bankName
    this.cvv = cvv
    this.expireDate = expireDate
    this.totalCost = totalCost
    this.orderId = orderId
  }

}
