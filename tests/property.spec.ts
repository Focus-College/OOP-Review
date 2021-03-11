import { expect } from "chai";
import "mocha";
import {Property} from "../src/classes/class.property"

describe("Property Tests", () => {
    const property = new Property("Orchard Park", "2271 Harvey Ave")
    it("should be a Property", () => {
        expect(property).to.be.instanceOf(Property)
    });
    it("should have an undefined id", () => {
        expect(property.id).to.equal(undefined)
    })
    it("should be owned by Orchard Park", () => {
        expect(property.owner).to.equal("Orchard Park")
    })
    it("should be at 2271 Harvey Ave", () => {
        expect(property.address).to.equal("2271 Harvey Ave")
    })
});
