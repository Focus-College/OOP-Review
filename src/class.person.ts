import { IPoly } from "./interfaces/ipoly.interface";
import { v4 } from "uuid";

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

    getAge (){
        this.age = dayjs(this.birthDate)
        return this.age
    }

    setId() {
        this.id = v4();
    }

    
}

