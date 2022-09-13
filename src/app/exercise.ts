export class Exercise {
    
    public name:string;
    public calories_per_hour:number;
    public duration_minutes:number;
    public total_calories:number

    constructor( name:string, calories_per_hour:number, duration_minutes:number, total_calories:number){
        this.name=name,
        this.calories_per_hour=calories_per_hour,
        this.duration_minutes=duration_minutes,
        this.total_calories=total_calories
    }

}
