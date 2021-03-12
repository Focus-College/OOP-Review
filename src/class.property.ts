import { Person } from "./class.person";
import {v4} from 'uuid';

export class Property{
    //properties
    public id:string;
    readonly _address:string;
    public _owner:Person[];

    //constructor sets my readonly address which wont move(in most cases)
    //and also sets the first owner, althogh this can be changed later
    constructor( owner:Person, address:string){
        this.id = v4();
        this._address = address;
        this._owner=[];
        this._owner.push(owner);
    }

    //this setter is how you change an owner
    addOwner( _newOwner:Person ){
        this._owner.push(_newOwner);
    }
    removeOwner( ownerToRemove:Person){
        const remove = ownerToRemove;
    
        const newOwners:Person[] = this._owner.filter((e) => {
            //if the element does NOT match the removed owner, add them to the new list
            if(e != remove){
                return this._owner.push(e);
            }
        });
        this._owner = [];
        this._owner = newOwners;
    }
}