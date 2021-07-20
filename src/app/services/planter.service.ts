import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanterDetails } from '../components/model/planter-details';

@Injectable({
  providedIn: 'root'
})
export class PlanterService {

  private address = 'http://localhost:9093';

  private getPlanterById_endpoint = this.address+'/onlinenursery/planter/';
  private getImageById_endpoint = this.address+'/onlinenursery/image';
  private getAllImage_endpoint= this.address+'/onlinenursery/image/images/';
  private getAllPlanter_endpoint = this.address+'/onlinenursery/planter/planters';
  private getAllPlantersByShape_endpoint = this.address+'/onlinenursery/planter/shape';

  constructor(private http:HttpClient) { }


  getAllPlanters():Observable<PlanterDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<PlanterDetails[]>(`${this.getAllPlanter_endpoint}`);
  }

  getAllImages(): Observable<any>
  {
    return this.http.get(`${this.getAllImage_endpoint}`);
  }

  getPlanterById(byId: number):Observable<PlanterDetails>{
    return this.http.get<PlanterDetails>(`${this.getPlanterById_endpoint}/${byId}`);
  }

  getImageById(pId:number):Observable<any>{
    return this.http.get(`${this.getImageById_endpoint}/${pId}/productImage`);
  }

  getAllPlantersByShape(type:string):Observable<PlanterDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<PlanterDetails[]>(`${this.getAllPlantersByShape_endpoint}/${type}`);
  }

  


}