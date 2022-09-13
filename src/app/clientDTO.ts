export class Client {
    public id: number;
    public fName: string;
    public lName: string;
    public email: string;
    public username: string;
    public password: string;
    public caloricGoal: number;

    constructor(id: number, fName: string, lName: string, email: string, username: string, password: string, caloricGoal: number = -1) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.caloricGoal = caloricGoal;
    }


}
