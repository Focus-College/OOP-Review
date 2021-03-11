import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person'

describe("Class Person", () => {
    it("Should Return A Full Name", () => {
        let person1 = new Person(1, "John", "Doe")
        person1.fullName()
        expect(person1).to.be.an("object").that.contains(1, "John Doe")
    });
});
