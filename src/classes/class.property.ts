export class Property {
    id:string
    
    constructor(public owner:string, private _address:string){
        
    }

    get address():string{
        return this._address
    }
}