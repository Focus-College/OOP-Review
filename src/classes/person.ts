export class Person{
    id:string
    name:string
    
    constructor(public firstname:string, public lastname:string){
        this.name = `${this.firstname} ${this.lastname}`
    }
}