import { Person } from "./class.person";

export class Property {

    id: string;
    readonly _address: string;
    owner: Person ;

    constructor(public firstName?:string, public lastName?:string, public address?: string){

        
        this._address = address;
        this.owner = new Person(firstName,lastName);
       
    }



}