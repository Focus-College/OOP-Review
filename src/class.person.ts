export class Person {

    // id:string;
    // firstName:string;
    // lastName:string;
    name:string;


    constructor(
        public id:number, 
        public firstName:string,
        public lastName:string) {

            this.name = this.firstName + this.lastName
    }


}