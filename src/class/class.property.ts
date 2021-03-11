import { IEntity } from "../interface/interface.entity";
import { Person } from "./class.person";

export class Property {

    id: string;
    readonly _address: string;
    owner: IEntity[] = [] ;
    //public firstName?:string, public lastName?:string
    constructor( public person:any, public address?: string){

        
        this._address = address;
    
        this.owner.push(person) ;
       
    }



}