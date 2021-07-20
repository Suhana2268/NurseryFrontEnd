import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Payment } from '../components.model/payment';
import { Order } from '../components/model/order';
import { Transaction } from '../components/model/transaction';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { 
    
  }
  addToCart(order: Order): Observable<object> {
    return this.http.post<object>(`${baseUrl}order/add`, order);
  }

  displayCart(): Observable<object[]> {
    return this.http.get<object[]>(`${baseUrl}order/customer/${sessionStorage.getItem('userId')}`);
  }

  getProductBypId(pId:any):Observable<any> {
    return this.http.get<any>(`${baseUrl}order/product/${pId}`);
  }

  /*removeFromCart(pId:any):Observable<object>{
    return this.http.delete<object>(`${baseUrl}order/delete/${pId}`)
  }*/

  makeTransaction(transaction:Transaction, userId:any):Observable<object> {
    return this.http.post<object>(`${baseUrl}transaction/add/${sessionStorage.getItem('userId')}`, transaction);
  }

  makePayment(payment:Payment, userId:any):Observable<object>{
    return this.http.post<object>(`${baseUrl}transaction/payment/add/${sessionStorage.getItem('userId')}`,payment);
  }


  }


