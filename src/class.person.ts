export class Person {

    //Person Properties 
    id:number;
    firstName:string;
    lastName:string;
    readonly name:string;


    constructor(firstName:string, lastName:string){
        //setting all the name properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = firstName + " " + lastName;
    }

}



