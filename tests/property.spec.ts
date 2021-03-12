import { expect } from "chai";
import "mocha";
import {PropertyBuilder} from '../src/class/class.property'
import { Person } from '../src/class/class.person'

describe("Test Property, kelowna SW rd", () => {
    it("should be return address, khatab AL-Daghistani", () => {

        const khatab = new Person("khatab","AL-Daghistani");
        const property = new PropertyBuilder()
        property.setAddress("kelowna SW rd");
        property.setOwner(khatab)
    
        expect(property.getProperty().address()).to.equal("kelowna SW rd")
        
    });

    it("should add one owner, khatab AL-Daghistani", () => {

        const khatab = new Person("khatab","AL-Daghistani");
        const property = new PropertyBuilder()
        property.setAddress("kelowna SW rd");
        property.setOwner(khatab)
    
        expect(property.getProperty().owners().length).to.equal(1)
        
    });

    it("should add two owners, khatab AL-Daghistani", () => {

        const khatab = new Person("khatab","AL-Daghistani");
        const property = new PropertyBuilder()
        property.setAddress("kelowna SW rd")
        property.setOwner(khatab);

        const dani = new Person("Dani","Louis");

        property.setOwner(dani);
            
        expect(property.getProperty().owners().length).to.equal(2)
        
    });

});



