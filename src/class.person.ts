console.log("Software Developmnet: Object Oriented Programming")

// person
// 4 properties
// id
// first name
// last name 
// name

export class Person {

    id: number;
    name:string;
    firstName:string;
    lastName: string;

    constructor(id:number, firstName:string, lastName:string){

    }

    fullName(){
        return this.firstName + "" + this.lastName;
    }


}

