export class Person {

    id : string;
    firstName: string;
    lastName: string;
    name:string;

    constructor(firstName:string,lastName:string){
        this.name = `${firstName} ${lastName}`;
    }


}