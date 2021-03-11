import { IPoly } from "../interfaces/ipoly.interface";
import { Property } from "./class.property";

export class PropertyBuilder {
    property = new Property()

    setAddress(location:string){
        this.property.setAddress(location)
    }

    setOwners(person:IPoly){
        this.property.newOwner(person)
    }

    getProperty(){
        return this.property;
    }

}