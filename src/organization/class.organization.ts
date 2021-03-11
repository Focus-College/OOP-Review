import {IPoly} from '../interfaces/ipoly.interface'
import { v4 } from "uuid";

export class Organization implements IPoly {

    id:string
    name:string

    setId() {
        this.id = v4();
    }
    
}