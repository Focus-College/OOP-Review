import { expect } from "chai";
import "mocha";
import {Organization} from "../src/class.organization"



describe("Test class Person", () => {

    const org = new Organization()

    it("should have two properties id, and name", () => {

        expect(org).to.be.instanceOf(Organization);
    });
})