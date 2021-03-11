import { expect } from "chai";
import "mocha";
import { Organization } from "../src/classes/class.organization";
import {Person} from "../src/classes/class.person"
import {Property} from "../src/classes/class.property"
import {InamedItem} from "../src/interfaces/interfaces.InamedItem"
import {PropertyBuilder} from "../src/classes/class.property"

describe("Property Builder", () => {
    const propertyBuilder = new PropertyBuilder()
    const person = new Person("Testy", "McTesterson")
    const org = new Organization()
    org.name = "OrgMcOrgface"
    const org2 = new Organization()
    org2.name = "Asdfville"
    it("should be a PropertyBuilder", () => {
        expect(propertyBuilder).to.be.instanceOf(PropertyBuilder);
    });
    it("should add the address", () => {
        propertyBuilder.addAddress("2277 Harvey Ave")
        expect(propertyBuilder.getResult().address).to.equal("2277 Harvey Ave")
    })
    it("should add a single owner", () => {
        propertyBuilder.addOwner(org)
        expect(propertyBuilder.getResult().owners).to.include(org)
    })
    it("should add multiple owners of InamedItem type", () => {
        propertyBuilder.addOwner(org2)
        propertyBuilder.addOwner(person)
        expect(propertyBuilder.getResult().owners).to.contain(person)
        expect(propertyBuilder.getResult().owners).to.contain(org2)
    })
});
