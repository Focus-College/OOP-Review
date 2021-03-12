class person {
}



export class Property {
    readonly address: string;
    id: string;
    owner: person;

    constructor(owner: person) {
        this.owner = owner
    }

}
class PropertyBuilder {
    private propertyBuilder: PropertyBuilder;

    private setPropertyBuilder(propertyBuilder: PropertyBuilder): void {
        this.propertyBuilder = propertyBuilder;
    }
}
let owner:  {
   address: Property

};

