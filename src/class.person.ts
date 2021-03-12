import dayjs from 'dayjs';
import {v4} from 'uuid';

export class Person {

    //Person Properties 
    id:string;
    firstName:string;
    lastName:string;
    readonly name:string;
    _birthdate:Date;

    constructor(firstName:string, lastName:string){
        //setting all the name properties
        this.id = v4();
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = firstName + " " + lastName;
    }

    private getBirthdayAsString(){
        const dayjsDate = dayjs(this._birthdate).format('YYYY/MM/DD')
        return dayjsDate;
    }

    getBirthday(){
        return this.getBirthdayAsString();
    }

    public getAge(){
        const birthday = this.getBirthdayAsString();
        const day:number =  parseInt(birthday.slice(9,10));
        const month:number = parseInt(birthday.slice(6,7));
        const year:number = parseInt(birthday.slice(0,4));
        const differance = dayjs().subtract(day, "days").subtract(month, "months").subtract(year,"years");
        return differance.format("YY");

    } 

    //dont know why month was getting a one added to it. found work around where we just -1
    setBirthdate(year:number, month:number, day:number){
        const date = new Date(year, (month - 1), day)
        this._birthdate = date;
    }

}


