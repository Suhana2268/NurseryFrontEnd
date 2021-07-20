import { PlanterService } from './../../../services/planter.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageDetails } from '../../model/image-details';
import { PlanterDetails } from '../../model/planter-details';
import { SeedService } from 'src/app/services/seed.service';

@Component({
  selector: 'app-view-planter',
  templateUrl: './view-planter.component.html',
  styleUrls: ['./view-planter.component.css']
})
export class ViewPlanterComponent implements OnInit {

  planterId!:number;
  planter!:PlanterDetails;
  image:ImageDetails = new ImageDetails();
  constructor(private activatedRouter:ActivatedRoute, private  planterService:PlanterService) {
    this.planterId = this.activatedRouter.snapshot.params['planterId'];
    this.getPlanterDetails(this.planterId);
   }
   
  ngOnInit(): void {
    
  }
  getPlanterDetails(planterId:number) {
   this.planterService.getPlanterById(planterId).subscribe(data=>{
      this.planter = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  this.planterService.getImageById(planterId).subscribe(data => {
    console.log(data);
    this.image = data;
  });
  }


}