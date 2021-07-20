export class PlanterDetails {
    pId:number;
    commonName:string;
    planterheight:number;
	planterCapacity:number;
	drinageHoles:number;
	planterColor:number;
	planterShape:number;
	planterStock:number;
	planterCost:number;
    constructor( 
        pId:number,
        commonName:string,
        planterheight:number,
        planterCapacity:number,
        drinageHoles:number,
        planterColor:number,
        planterShape:number,
        planterStock:number,
        planterCost:number){
            this.pId=pId
            this.commonName=commonName
           this.planterheight= planterheight
            this.planterCapacity= planterCapacity
            this.drinageHoles=drinageHoles
            this.planterColor=planterColor
            this.planterShape=planterShape
            this.planterStock=planterStock
            this.planterCost=planterCost

    }
	
}