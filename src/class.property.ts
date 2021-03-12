import {Person} from "./class.person"
import { IEntity } from "./interfaces";

export class Property {
    id:string;
    readonly address:string;
    owners: IEntity[] = []; 

  
    constructor(){
        const address = "1365 highway 33 west, Kelowna, B.C, Canada"
        this.address = address

    }

   get ownersNmaes(){
       return this.owners.map(owner => owner.name).join(",")
   }

       addOwner(owner:IEntity){
           this.owners.push(owner)

       }
   
}