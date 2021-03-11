import {InamedItem} from '../interfaces/interfaces.InamedItem'

export class Property {
    id:string
    owners:InamedItem[] = []

    constructor(public owner:InamedItem, private _address:string){
        this.owners.push(owner)
    }

    showOwners(){
        return this.owners
    }

    get address():string{
        return this._address
    }
}