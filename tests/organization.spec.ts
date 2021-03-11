import { expect } from "chai";
import "mocha";
import {Organization} from '../src/classes/class.organization'

describe("Organizations", () => {
    const org = new Organization()
    org.name = "Orchard Park Group"
    it("should be an Organization", () => {
        expect(org).to.be.instanceOf(Organization)
    })
    it("should have an id property", () => {
        expect(org.id).to.be.undefined
    })
    it("should have a name property", () => {
        expect(org.name).to.equal("Orchard Park Group")
    } )
});
