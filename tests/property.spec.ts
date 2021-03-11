import { expect } from "chai";
import "mocha";
import {Property} from '../src/class/class.property'

describe("Test Property, kelowna SW rd", () => {
    it("should be return address, khatab AL-Daghistani", () => {
        const property = new Property("khatab","AL-Daghistani","kelowna SW rd")
    
        expect(property.address).to.equal("kelowna SW rd")
        
    });

});
