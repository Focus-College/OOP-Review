import { expect } from "chai";
import "mocha";
import { Organization } from "../src/classes/class.organization";
import {Property} from "../src/classes/class.property"

describe("Property Tests", () => {
    const owner = new Organization()
    owner.name = "Orchard Park Group"
    const property = new Property(owner, "2271 Harvey Ave")
    it("should be a Property", () => {
        expect(property).to.be.instanceOf(Property)
    });
    it("should have an undefined id", () => {
        expect(property.id).to.equal(undefined)
    })
    it("should be owned by Orchard Park", () => {
        expect(property.owner).to.equal(owner)
    })
    it("should be at 2271 Harvey Ave", () => {
        expect(property.address).to.equal("2271 Harvey Ave")
    })
    it("should include Orchard Park Group as owners", () => {
        expect(property.showOwners()).to.include(owner)
    })
});
