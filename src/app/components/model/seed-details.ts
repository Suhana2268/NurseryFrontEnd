import { Byte } from "@angular/compiler/src/util";

export class SeedDetails {
    pId:number;
    commonName:string;
    bloomTime:string;
    watering:string;
    difficultyLevel:string;
    temparature:string;
    typeOfSeeds:string;
    seedsDescription:string;
    seedsStock:string;
    seedsCost:string;
    seedsPerPacket:number;
    



  constructor(
    pId: number, 
    commonName: string, 
    bloomTime: string, 
    watering: string, 
    difficultyLevel: string, 
    temparature: string, 
    typeOfSeeds: string, 
    seedsDescription: string, 
    seedsStock: string, 
    seedsCost: string, 
    seedsPerPacket: number
) {
    this.pId = pId
    this.commonName = commonName
    this.bloomTime = bloomTime
    this.watering = watering
    this.difficultyLevel = difficultyLevel
    this.temparature = temparature
    this.typeOfSeeds = typeOfSeeds
    this.seedsDescription = seedsDescription
    this.seedsStock = seedsStock
    this.seedsCost = seedsCost
    this.seedsPerPacket = seedsPerPacket
  }
 

}