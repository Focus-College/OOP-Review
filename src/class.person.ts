import { IPoly } from "./interfaces/ipoly.interface";

// console.log("Software Developmnet: Object Oriented Programming")
const dayjs = require('dayjs')

export class Person implements IPoly {
    public id:string
    public name:string

    public birthDate:Date;
    public age:number;

    constructor(public firstName:string, public lastName:string){
        this.name = firstName + " " + lastName;
    }

    // private get getBirthdate(){
    //     return this.birthDate;
    // }

    setId() {
        this.id = "1";
    }

    
}

