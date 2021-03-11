import dayjs = require('dayjs');
import { IEntity } from './interfaces';

export class Person implements IEntity {
    id: string;
    name: string;
    age:number;    
    birthDate: Date;

   constructor( public fName:string, public lName:string){
    this.name = `${this.fName} ${this.lName}`
}

private birthDateToString(){
    return this.birthDate.toISOString()
}

    public CalculateAge(){

        if(this.birthDate){

            this.birthDate.toISOString
            
            const formatDate = dayjs(this.birthDate).format('YYYY-MM-DD')
            const timeDiff = Math.abs(Date.now() - this.birthDate.getTime())
             this.age  = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
            

            return this.age
        }


    }


}