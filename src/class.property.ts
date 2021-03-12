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

