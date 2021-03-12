import { Person } from "./class.person";
import {v4} from 'uuid';

export class Property{
    //properties
    public id:string;
    readonly _address:string;
    public _owner:Person;

    //constructor sets my readonly address which wont move(in most cases)
    //and also sets the first owner, althogh this can be changed later
    constructor( owner:Person, address:string){
        this.id = v4();
        this._address = address;
        this._owner = owner;
    }

    //this setter is how you change an owner
    setOwner( _newOwner:Person ){
        this._owner = _newOwner;
    }


}