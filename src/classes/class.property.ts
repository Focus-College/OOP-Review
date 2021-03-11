import { Person } from "./class.person";
import {IProperty} from "./general_interfaces";
import {MutableRequired} from "./general_interfaces"; //remove readonly
import {ReadonlyPartial} from "./general_interfaces"; //add readonly :0



export class Property implements IProperty{
        
    private adress:string;
    // adress:ReadonlyPartial<string>; //it can end as readonly doesn't have to technically as start as one.
    public owner:Person;  //aslong as the effect makes it read only it's fine

    constructor(public id:number ){

    }

    set newOwner(owner:Person){

        this.owner == owner;

    }

    set newAdress(adress:string){

        this.adress = adress;
       
    }

    get oldAdress(){

       return this.adress;
       
    }

}

