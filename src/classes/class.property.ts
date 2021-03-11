import {InamedItem} from '../interfaces/interfaces.InamedItem'
import { Organization } from './class.organization'

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