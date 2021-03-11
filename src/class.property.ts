import {Person} from "./class.person"

export class Property {
    id:string;
    readonly address:string;
    owner: Person

  
    constructor(){
        const address = "1365 highway 33 west, Kelowna, B.C, Canada"
        this.address = address

    }

   
       setOwner (){

        const Owner = new Person("Angham", "Alshahoud")
        Owner.id = "An1"
        Owner.name
        Owner.birthDate = new Date (1999,9,7)
        Owner.CalculateAge()
        this.owner = Owner
        return this.owner

       }
   
}