export class Person {

    // id:string;
    // firstName:string;
    // lastName:string;
    name:string;
    privateBirthDate:string;


    constructor(
        public id:number, 
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