import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person';
import {Organization} from '../src/organization/class.organization';
import {Property} from '../src/Property/class.property'

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

describe("Property Exercise 3", () => {
    let joe = new Person("John", "Doe")
    let p1 = new Property(4545, "Hemming Way",joe)
    it("should have an id", () => {
        expect(p1.id).to.equal(4545)
    });
    it("should have an address", () => {
        expect(p1.propertyAddress).to.equal("Hemming Way")
    });
    it("should have an owner", () => {
        expect(p1.owner).to.equal(joe)
    });

});

describe("Organization Exercise 4", () => {
    let GeraldsContracting = new Organization()
    GeraldsContracting.setId()
    it("should include an id", () => {
        expect(GeraldsContracting.id).to.equal("1")
    });

});


