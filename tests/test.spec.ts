import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person'
import {Organization} from '../src/organization/class.organization'

describe("Class Person", () => {
    it("Should return id as 1", () => {
        let person1 = new Person("John", "Doe")
        person1.setId()
        expect(person1.id).to.equal("1")
    });
    it("Should return firstName", () => {
        let person1 = new Person("John", "Doe")
        expect(person1.firstName).to.equal("John")
    });
    it("Should return lastName", () => {
        let person1 = new Person("John", "Doe")
        expect(person1.lastName).to.equal("Doe")
    });
    it("Should return name", () => {
        let person1 = new Person("John", "Doe")
        expect(person1.name).to.equal("John Doe")
    });
});


describe("Class Person Pt.2", () => {
    it("should include a birthdate", () => {
        let person1 = new Person("John", "Doe")
        person1.birthDate = new Date("1983-04-05")
        expect(person1.birthDate).to.exist
    });

});

describe("Organization Exercise 4", () => {
    let GeraldsContracting = new Organization()
    GeraldsContracting.setId()
    it("should include an id", () => {
        expect(GeraldsContracting.id).to.equal("1")
    });

});


