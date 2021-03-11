import { expect } from "chai";
import "mocha";

import { Person } from "../src/class.person";

describe('Person', () => {
    it('Should Store Name', () => {
        const person = new Person( 1, "Tyler","Matzelle");
        expect (person.id).to.be.eq(1);
        expect(person.firstName).to.be.eq("Tyler");
        expect(person.lastName).to.be.eq("Matzelle");
        expect(person.name).to.be.eq("Tyler Matzelle");
    })
})