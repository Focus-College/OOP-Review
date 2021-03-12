import { expect } from "chai";
import "mocha";
import { Organization } from "../src/classes/class.organization";
import { Person } from "../src/classes/class.person";
import {Property} from "../src/classes/class.property"

describe("Property Tests", () => {
    const owner = new Organization()
    owner.name = "Orchard Park Group"
    const property = new Property()
    const person = new Person("Testy", "McTesterson")
    property.addOwner(owner)
    property.addOwner(person)
    property.address = "2271 Harvey Ave"
    it("should be a Property", () => {
        expect(property).to.be.instanceOf(Property)
    });
    it("should have an undefined id", () => {
        expect(property.id).to.equal(undefined)
    })
    it("should create a Property with an owner attached", () => {
        const prop = new Property(person)
        expect(prop.owners).to.include(person)
    })
    it("should be at 2271 Harvey Ave", () => {
        expect(property.address).to.equal("2271 Harvey Ave")
    })
    it("should include Orchard Park Group as owners", () => {
        expect(property.showOwners()).to.include(owner)
    })
    it("should include Testy McTesterson as an owner", () => {
        expect(property.showOwners()).to.include(person)
    })
});