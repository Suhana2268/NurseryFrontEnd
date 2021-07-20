import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanterDetails } from '../components/model/planter-details';
import { PlantDetails } from '../components/model/plant-details';

import { SeedDetails } from '../components/model/seed-details';

@Injectable({
  providedIn: 'root'
})
export class SeedService {

  private address = 'http://localhost:9093';
  private getAllSeed_endpoint = this.address+'/onlinenursery/seed/seeds';
  private getAllImage_endpoint= this.address+'/onlinenursery/image/images/';
  private getAllSeedsByType_endpoint  = this.address+'/onlinenursery/seed/type';
  private getAllSeedById_endpoint = this.address+'/onlinenursery/seed/';
  private getImageById_endpoint = this.address+'/onlinenursery/image';


  constructor(private http:HttpClient) { }

  getAllSeeds():Observable<SeedDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<SeedDetails[]>(`${this.getAllSeed_endpoint}`);
  }

  getAllImages(): Observable<any>
  {
    return this.http.get(`${this.getAllImage_endpoint}`);
  }

  getAllSeedsByType(type:string):Observable<SeedDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<SeedDetails[]>(`${this.getAllSeedsByType_endpoint}/${type}`);
  }

  getImageById(pId:number):Observable<any>{
    return this.http.get(`${this.getImageById_endpoint}/${pId}/productImage`);
  }

  getSeedById(bId: number):Observable<SeedDetails>{
    return this.http.get<SeedDetails>(`${this.getAllSeedById_endpoint}/${bId}`);
  }
  
  
 
}