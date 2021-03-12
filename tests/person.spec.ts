import { expect } from "chai";
import "mocha";
import {Person} from "../src/class.person"



describe("Test class Person", () => {

    const person = new Person("Angham", "Alshahoud")
    person.birthDate = new Date(1999,9,7);

    it("should have six properties id, fname, lname, name, birthDate, age", () => {

        expect(person).to.be.instanceOf(Person);
    });

    it("should get the Person full Name", () =>{

       expect(person.name).to.be.equal("Angham Alshahoud")
    });

    it("should have a birth date", () => {
        expect(person.birthDate).to.exist

    })

    it("should get the person age which is 21", () => {

        expect(person.CalculateAge()).to.equal(21)

    })
});



