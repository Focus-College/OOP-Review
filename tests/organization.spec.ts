import { expect } from "chai";
import "mocha";
import {Organization} from '../src/classes/class.organization'
import { Person } from "../src/classes/class.person";

describe("Organizations", () => {
    const org = new Organization()
    org.name = "Orchard Park Group"
    const ownerOne = new Person("Jimmy", "James")
    const ownerTwo = new Organization()
    ownerTwo.name = "Org McOrgface"
    const ownerThree = new Organization()
    ownerThree.name = "Adsf"
    ownerThree.suffix = "Inc."
    it("should be an Organization", () => {
        expect(org).to.be.instanceOf(Organization)
    })
    it("should have an id property", () => {
        expect(org.id).to.be.undefined
    })
    it("should have a name property", () => {
        expect(org.name).to.equal("Orchard Park Group")
    } )
    it("should have a dba property", () => {
        expect(org.dba).to.be.undefined
    })
    it("should disallow anything but LTD, LTD., Ltd, Ltd., LLC, INC, INC. Inc, Inc. as suffixes ", () => {
        expect(() => {org.suffix = ".com"}).to.throw()
    })
    it("should allow LTD, LTD., Ltd, Ltd., LLC, INC, INC. Inc, Inc. as suffixes", () => {
        expect(() => {
            org.suffix = "LTD"
            org.suffix = "LTD."
            org.suffix = "Ltd"
            org.suffix = "Ltd."
            org.suffix = "LLC"
            org.suffix = "INC"
            org.suffix = "INC."
            org.suffix = "Inc"
            org.suffix = "Inc."
        }).to.not.throw()
    })
    it("should have a legal name of Adsf Inc.", () => {
        expect(ownerThree.legalName).to.equal("Adsf Inc.")
    })
    it("should have Jimmy James as an owner", () => {
        org.owners.push(ownerOne)
        expect(org.owners).to.contain(ownerOne)
    })
    it("should error if a person who does not have a share in the organization tries to sell it.", () => {
        expect(() => {
            org.sell([ownerThree], [ownerTwo])
        }).to.throw()
    })
    it("should remove Jimmy James as an owner and add Adsf Inc.", () => {
        org.sell([ownerThree, ownerTwo], [ownerOne])
        expect(org.owners).to.contain(ownerThree)
        expect(org.owners).to.contain(ownerTwo)
        expect(org.owners).to.not.contain(ownerOne)
    })
});
