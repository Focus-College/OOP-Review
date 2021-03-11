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

    const mockDate = new Date("March 13, 2020 4:13:00")
    const Doe = new Person( 3, "Jack", "Langely", mockDate, 200);

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

    
    it("the birthday should be of type date", () => {
      
        expect(Doe.birthDate).to.be.instanceOf(Date);
    
    });


    it("should be able to retun birthdate as a string.", () => {
      
        expect(Doe.yoink()).to.be.a("string");
        expect(Doe.yoink()).to.be.eq(`"2020-03-13T11:13:00.000Z"`);

    });

    
    it("should have an age of 200.", () => {
      
        expect(Doe.age).to.be.eq(200);

    });



});

