import { IEntity } from "../interface/interface.entity";
import { Person } from "./class.person";
// import { Person } from "./class.person";

export class Property {

    id: string;
    _address: string; // readonly not possible ???
    _owners: IEntity[] = [] ;
  

    constructor(  ){   
    }


    owners(){
        return this._owners
    }

    address(){
        return this._address
    }
    
}

export class PropertyBuilder {

    
    private property = new Property();


    setOwner(person:Person){
        this.property._owners.push(person);
    }

    setAddress(address: string){
        this.property._address = address;    
    }

    

    // private _instance:Property;
    

    // protected get instance():Property {
        
    //             if( !this._instance ){
                    
    //                 this._instance = new Property();;
        
    //             }
        
    //             return this._instance;
    //         }


    
  

    getProperty (){
        return this.property;
    }


        
}