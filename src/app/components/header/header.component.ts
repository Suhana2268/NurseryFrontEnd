import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  AllSeeds:string="AllSeeds";
  Monocotyledonous:string ="Monocotyledonous";
  Dicotyledonous:string ="Dicotyledonous";
  AllPlants:string="AllPLants";
  Herbal:string="Herbal";
  Medical:string="Medical";
  AllPlanters:string="AllPlanters"
  Round:string="Round";
  Square:string="Square";
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}