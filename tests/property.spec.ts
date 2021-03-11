import { expect } from "chai";
import "mocha";
import {Property} from '../src/class/class.property'
import { Person } from '../src/class/class.person'

describe("Test Property, kelowna SW rd", () => {
    it("should be return address, khatab AL-Daghistani", () => {

        const khatab = new Person("khatab","AL-Daghistani");
        const property = new Property(khatab,"kelowna SW rd")
    
        expect(property.address).to.equal("kelowna SW rd")
        
    });

});
