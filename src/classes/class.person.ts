import {IEntity} from "./general_interfaces"



export class Person implements IEntity {

    // id:string;
    // firstName:string;
    // lastName:string;
    name:string;
    privateBirthDate:string;


    constructor(
        public id:string, 
        public firstName:string,
        public lastName:string,
        public birthDate:Date,
        public age:number,
        
        ) {

            this.name = this.firstName + this.lastName
    }

    private get theBirthDate(){

        const stringBirthday = JSON.stringify(this.birthDate);
        this.privateBirthDate = stringBirthday;
        return stringBirthday
    }

    public yoink(){
        const thisBirthDateByProxy = this.theBirthDate
        return thisBirthDateByProxy;
    }



}