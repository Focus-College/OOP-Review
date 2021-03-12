import {InamedItem} from '../interfaces/interfaces.InamedItem'
import { Organization } from './class.organization'
import dayjs from 'dayjs'
import { start } from 'node:repl'

export class Property {
    
    id:string
    owners:InamedItem[] = []
    owner:InamedItem
    private _address:string

    constructor(owner?:InamedItem){
        if(owner){
            this.owners.push(owner)
        }
    }

    showOwners(){
        return this.owners
    }

    addOwner(owner:InamedItem){
        this.owners.push(owner)
    }

    get address():string{
        return this._address
    }

    set address(address:string){
        this._address = address
    }

}

export class PropertyBuilder{
    baseProperty = new Property()

    addOwner(owner:InamedItem){
        this.baseProperty.owners.push(owner)
    }

    addAddress(address:string){
        this.baseProperty.address = address
    }

    getResult(){
        return this.baseProperty
    }
}

export class PropertyRentals extends Property{
    lengthOfTerm:number

    constructor(public termStart:Date, public termEnd:Date){
        super()
        if( termStart.getTime() > termEnd.getTime()){
            throw new Error("You have entered a start that is after the end date.")
        }
        this.calculateTermLength(termStart, termEnd)
    }

    public calculateTermLength(start:Date, end:Date){
        const differenceInTime = end.getTime() - start.getTime()
        const differenceInDays = differenceInTime/(1000 * 3600 * 24)
        this.lengthOfTerm = Math.ceil(differenceInDays) //Business decision: rentals are finished at the end of the last day.
        return this.lengthOfTerm
    }
 
    isTermOver(on?:Date){
        if(on){
            return on.getTime() > this.termEnd.getTime()
        } else {
            return Date.now() > this.termEnd.getTime()
        }
    }

    leftInTerm(on?:Date){
        if(on){
            const differenceInTime = this.termEnd.getTime() - on.getTime()
            const differenceInDays = differenceInTime/(1000 * 3600 * 24)
            const termLeft = Math.ceil(differenceInDays)
            return Math.max(termLeft, 0)
        } else {
            if(!this.isTermOver()){
                return Math.ceil((this.termEnd.getTime() - Date.now())/(1000 * 3600 * 24))
            }
            return 0 //If the term is over, there is no time left in the term.
        }
    }
}