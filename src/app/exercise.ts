export class Exercise {

    public name:string;
    public caloriesPerHour:number;
    public durationInMinutes:number;
    public totalCaloriesBurned:number

    constructor( name:string, caloriesPerHour:number, durationInMinutes:number, totalCaloriesBurned:number){
        this.name=name,
        this.caloriesPerHour=caloriesPerHour,
        this.durationInMinutes=durationInMinutes,
        this.totalCaloriesBurned=totalCaloriesBurned
    }

}
