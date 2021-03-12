import { StringifyOptions } from 'node:querystring'
import {InamedItem} from '../interfaces/interfaces.InamedItem'
import _ from 'lodash'

export class Organization implements InamedItem{
    id:string
    name:string
    dba:string
    owners:InamedItem[] = []

    get legalName():string{
        return `${this.name} ${this.suffix}`
    }

    private _suffix:string

    get suffix(){
        return this._suffix
    }

    set suffix(suffix:string){
        const validSuffixes = ["LTD", "LTD.", "Ltd", "Ltd.", "LLC", "INC", "INC.", "Inc", "Inc."]
        
        if(!validSuffixes.find(item => item === suffix)){
            throw new Error("Suffixes must be one of LTD, LTD., Ltd, Ltd., LLC, INC, INC., Inc or Inc.")
        } else {
            this._suffix = suffix
        }
    }

    sell(buyers:InamedItem[], sellers:InamedItem[]){
        const sellersAreOwners = this.owners.every(seller => sellers.includes(seller))
        if(!sellersAreOwners){
            throw new Error("Those people or organizations does not own any part of this organization")
        } else {
            const filteredOwners = _.difference(this.owners, sellers)
            this.owners = []
            this.owners.push(...buyers, ...filteredOwners)
        }
    }
}