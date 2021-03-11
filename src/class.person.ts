// console.log("Software Developmnet: Object Oriented Programming")
const dayjs = require('dayjs')
// person
// 4 properties
// id
// first name
// last name 
// name

export class Person {
    public name:string

    public birthDate:Date;
    public age:number;

    constructor(public id: number, public firstName:string, public lastName:string){
        this.name = firstName + " " + lastName;
    }

    private get getBirthdate(){
        return this.birthDate;
    }

    
}

