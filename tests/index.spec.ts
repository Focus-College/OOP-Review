import { expect } from "chai";
import "mocha";

//Classes
import {Person} from "../src/class.person"




describe("Test Review Framework", () => {
    it("should be 1 == 1", () => {
        expect(1).to.equal(1);
    });
});

describe("A person", () => {

    const Doe = new Person( 3, "Jack", "Langely");

    it("should be of type person!", () => {
      
        expect(Doe).to.be.instanceOf(Person);
    
    });

    it("the first name should be Jack", () => {
      
        expect(Doe.firstName).to.be.eq("Jack");
        //expect(Doe.firstName).to.be.eql("Jack");

    });

    it("the last name should be Langely", () => {
      
        expect(Doe.lastName).to.be.eq("Langely");
    
    });

    it("should have id 3", () => {
      
        expect(Doe.lastName).to.be.eq("Langely");
    
    });

    it("the name should be made up of the firstname+lastname", () => {
      
        expect(Doe.name).to.be.eql("JackLangely");
    
    });




});

