import {IPoly} from '../interfaces/ipoly.interface'
export class Organization implements IPoly {

    id:string
    name:string

    setId() {
        this.id = "1";
    }
    
}