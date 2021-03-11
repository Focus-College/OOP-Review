import { expect } from "chai";
import "mocha";

//Classes
import {Person} from "../src/classes/class.person";
import {Property} from "../src/classes/class.property";



describe("Property", () => {

    const mockDate = new Date("March 13, 2020 4:13:00")
    const Doe = new Person( 3, "Jack", "Langely", mockDate, 200);
    const Bat = new Property(123);

    it("creates a new instance of property", () => {
      
        expect(Bat).to.be.instanceOf(Property);

    });

    it("has no adress", () => {
      
        expect(Bat.oldAdress).to.be.eq(undefined);

    });

    it("it has no owner", () => {
      
        expect(Bat.owner).to.be.eq(undefined);
    });

    it("it has an id", () => {
      
        expect(Bat.id).to.be.eq(123);

    });

    it("can set an adress", () => {
        
        Bat.newAdress= "Hello Street";
        
    });

    it("it can set an owner", () => {
      
        Bat.newOwner = Doe

    });

    it("it can read an adress", () => {
        Bat.newAdress= "Hello Street";
        expect(Bat.oldAdress).to.be.eq("Hello Street")

    });
    
    it("is adress readonly... ", () => {
              
         expect(Bat.adress).to.throw("Error: Does not exist")
    
    });

});