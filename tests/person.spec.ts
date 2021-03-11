import { expect } from "chai";
import "mocha";
import {Person} from "../src/class.person"
describe("Test class Person", () => {
    it("should have four properties id, fname, lname, name", () => {

        const instance = new Person()
        expect(instance).to.be.instanceOf(Person);
    });
});
