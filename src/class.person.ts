export class Person{
    id: string;
    fName: string;
    lName: string;
    name:string
   
    constructor(){
        this.name = this.fName + " " + this.lName;
        
    }
}