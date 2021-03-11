import { Person } from "../class.person";
import { IPoly } from "../interfaces/ipoly.interface";
import { v4 } from "uuid";


export class Property{ 
  
  id: string
  owners:any[]=[]
  private address:string


  setAddress(location:string){
    this.address = location;
  }

  getAddress(){
    return this.address;
  }

  newOwner(person:IPoly){
    this.owners.push(person)
  }

  setId() {
    this.id = v4();
  } 
}