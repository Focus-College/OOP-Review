import {InamedItem} from './class.organization'

export class Person implements InamedItem{
    id:string
    name:string
    birthdate:Date
    age:number
    
    constructor(public firstname:string, public lastname:string){
        this.name = `${this.firstname} ${this.lastname}`
    }

    private get birthdateAsString(){
        return this.birthdate.toString()
    }

    public calculateAge(){
        const difference = Date.now() - this.birthdate.getTime()
        const agediff = new Date(difference)
        this.age = Math.abs(agediff.getUTCFullYear() - 1970)
        return this.age
    }
}