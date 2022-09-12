export class ExerciseComplete {

    public date:Date;
    public name:string;
    public durMin:number;
    public totCal:number

    constructor( date:Date, name:string, durMin:number, totCal:number){
        this.date=date,
        this.name=name,
        this.durMin=durMin,
        this.totCal=totCal
    }

}
