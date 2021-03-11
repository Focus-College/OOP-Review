import { Person } from "../class.person";

export class Property{ 

  // id: string = "t45"
  
  constructor(public id:number, private address:string, public owner:Person){
    Object.assign(this)
  }

  get propertyAddress (){
    return this.address
  }


}