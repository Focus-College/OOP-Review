import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person'

describe("Test Person Class", () => {
    it("Name should equal the firstName plus the LastName", () => {
        const person = new Person("Gil", "Henry");

        expect(person.firstName + " " + person.lastName).to.equal(person.name);
    });
});
