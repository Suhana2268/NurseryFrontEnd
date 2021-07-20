import { ImageDetails } from '../../model/image-details';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeedDetails } from '../../model/seed-details';
import { SeedService } from 'src/app/services/seed.service';

@Component({
  selector: 'app-view-seed',
  templateUrl: './view-seed.component.html',
  styleUrls: ['./view-seed.component.css']
})
export class ViewSeedComponent implements OnInit {

  seedId:number;
  seed !: SeedDetails;
  image:ImageDetails = new ImageDetails();
  constructor(private activatedRouter:ActivatedRoute, private  seedService:SeedService) {
    this.seedId = this.activatedRouter.snapshot.params['seedId'];
    this.getSeedDetails(this.seedId);
   }
   
  ngOnInit(): void {
    
  }
  getSeedDetails(seedId:number) {
   this.seedService.getSeedById(seedId).subscribe(data=>{
      this.seed = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  this.seedService.getImageById(seedId).subscribe(data => {
    console.log(data);
    this.image = data;
  });


  }

}