import { Person } from "./class.person";

export type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] }; // Remove readonly and ?
export type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] }; // Add readonly and ?



export interface IProperty{

    id:number;
    owner:Person;

}




export interface IEntity{

    id:string;
    name:string;


}

