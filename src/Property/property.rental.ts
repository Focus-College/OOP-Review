import { Property } from "./class.property";
const dayjs = require('dayjs')

export class PropertyRental extends Property {

    lengthOfTerm: number;

    constructor(public termStart:Date, public termEnd:Date){
        super()
        this.lengthOfTerm = (Math.abs(Number(termStart) - Number(termEnd)) / (1000 * 60 * 60 * 24) )
    }


    isTermOver(on?:Date) {
        if (on > this.termEnd){
            return true;
        } else {
            return false;
        }
    }

    leftInTerm(on?:Date){
       let difference = Math.abs(Number(this.termEnd) - Number(on)) / (1000 * 60 * 60 * 24) 
       return difference
    }
}