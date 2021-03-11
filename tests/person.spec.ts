import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person'

describe("Class Person", () => {
    it("Should return firstName", () => {
        let person1 = new Person(1, "John", "Doe")
        expect(person1.firstName).to.equal("John")
    });
    it("Should return lastName", () => {
        let person1 = new Person(1, "John", "Doe")
        expect(person1.lastName).to.equal("Doe")
    });
    it("Should return name", () => {
        let person1 = new Person(1, "John", "Doe")
        expect(person1.name).to.equal("John Doe")
    });
});


describe("Class Person Pt.2", () => {
    it("should include a birthdate", () => {
        let person1 = new Person(1, "John", "Doe")
        person1.birthDate = new Date("1983-04-05")
        expect(person1.birthDate).to.exist
    });

});


