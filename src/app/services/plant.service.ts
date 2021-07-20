import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantDetails } from '../components/model/plant-details';

@Injectable({
  providedIn: 'root'
})
export class PlantService {


 private address = 'http://localhost:9093';
  private getAllPlant_endpoint = this.address+'/onlinenursery/plant/plants';
  private getPlantByType_endpoint = this.address+'/onlinenursery/plant/type/';
  private getAllImage_endpoint= this.address+'/onlinenursery/image/images/';
  private getImageById_endpoint = this.address+'/onlinenursery/image';


  private getPlantById_endpoint = this.address+'/onlinenursery/plant/';
  constructor(private http:HttpClient) { }

  getAllPlants():Observable<PlantDetails[]>
  {
    return this.http.get<PlantDetails[]>(`${this.getAllPlant_endpoint}`);
  }

  getAllPlantsByType(type:string):Observable<PlantDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<PlantDetails[]>(`${this.getPlantByType_endpoint}/${type}`);
  }

  getPlantById(byId: number):Observable<PlantDetails>{
    return this.http.get<PlantDetails>(`${this.getPlantById_endpoint}/${byId}`);
  }

  getAllImages(): Observable<any>
  {
    return this.http.get(`${this.getAllImage_endpoint}`);
  }

  getImageById(pId:number):Observable<any>{
    return this.http.get(`${this.getImageById_endpoint}/${pId}/productImage`);
  }

}