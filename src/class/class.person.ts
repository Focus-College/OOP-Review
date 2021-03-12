// import * as dayjs from 'dayjs'
import { IEntity } from '../interface/interface.entity';
export class Person implements IEntity{

    id : string;
    // firstName: string = "firstName";
    // lastName: string = "lastName";
    firstName: string ;
    lastName: string ;
    name:string;

    birthDate: Date;
    age: number;

    constructor(firstName?:string,lastName?:string){
        this.name = `${firstName} ${lastName}`;
    }

    getAge(){

        let date: Date = new Date();  
        return this.age = date.getFullYear() -  this.birthDate.getFullYear();
    }

     
    private dateInString (date:Date){

        /* istanbul ignore next */  
            return date.toDateString();

    }




}