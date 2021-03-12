import {IPoly} from '../interfaces/ipoly.interface'
import { v4 } from "uuid";

export class Organization implements IPoly {
    private suffix = "LTD."
    dba:string = "string"
    id:string
    legalName:string

    constructor(public name:string){
        this.legalName = name += " " + this.suffix
    }

    setId() {
        this.id = v4();
    }
    // are dbas shares?
    // ill come back to this.
}