import { expect } from "chai";
import "mocha";
import { Person } from "../src/class.person";
import {Property} from "../src/class.property"



describe("Test class Property", () => {


    const property = new Property()

    property.address
    property.setOwner()

    it("should have three properties id, address, owner", () => {

        expect(property).to.be.instanceOf(Property);
    });

    it("should get the Person address ", () =>{

       expect(property.address).to.be.equal("1365 highway 33 west, Kelowna, B.C, Canada")
    });

    it("should get the Owner info", () => {
        expect(property.owner).to.be.instanceOf(Person)

    })

});