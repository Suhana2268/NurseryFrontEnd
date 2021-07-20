import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageDetails } from '../../model/image-details';
import { PlantDetails } from '../../model/plant-details';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-view-plant',
  templateUrl: './view-plant.component.html',
  styleUrls: ['./view-plant.component.css']
})
export class ViewPlantComponent implements OnInit {

  
  plantId:number;
  plant!: PlantDetails;
  image:ImageDetails = new ImageDetails();
  constructor(private activatedRouter:ActivatedRoute, private  plantService:PlantService) {
    this.plantId = this.activatedRouter.snapshot.params['plantId'];
    this.getPlantDetails(this.plantId);
   }
   
  ngOnInit(): void {
    
  }
  getPlantDetails(seedId:number) {
   this.plantService.getPlantById(seedId).subscribe(data=>{
      this.plant = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  this.plantService.getImageById(seedId).subscribe(data => {
    console.log(data);
    this.image = data;
  });


  }

}