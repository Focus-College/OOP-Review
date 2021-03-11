import { Person } from "../class.person";
import { IPoly } from "../interfaces/ipoly.interface";
import { v4 } from "uuid";


export class Property{ 
  
  id: string
  owners:any[]=[]

  
  constructor( private address:string, public owner:IPoly){
    this.owners.push (owner)
  }

  setId() {
    this.id = v4();
  } 

  get propertyAddress (){
    return this.address
  }



}