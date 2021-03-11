// create a "person" object

export class Person {

    public get id():number{
        this.id == 0;
        return this.id + 1;
    }

    public get name():string{
        return `${this.firstName} ${this.lastName}`;
    }

    constructor(public Id:number, public firstName:string, public lastName:string){}
}