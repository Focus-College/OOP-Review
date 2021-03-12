import { Person } from "./class.person";
import {IProperty} from "./general_interfaces";
import {MutableRequired} from "./general_interfaces"; //remove readonly
import {ReadonlyPartial} from "./general_interfaces"; //add readonly :0
import {IEntity} from "./general_interfaces";



export class Property implements IProperty{
        
    private adress:string;
    public owner:IEntity[] = []; //maybe it has to be empty before the pushes work. 
    constructor(public id:number ){

    }

    newOwner(newOwner:IEntity){

        this.owner.push(newOwner);
        console.log(`Pushed new owner ${newOwner.name} to ${this.id}`);

    }

    deleteOwner(delOwner:IEntity){

        const newSet = new Set(this.owner)
        newSet.delete(delOwner);
        this.owner = [...newSet];
    }

    set newAdress(adress:string){

        this.adress = adress;
       
    }

    get oldAdress(){

       return this.adress;
       
    }

}

