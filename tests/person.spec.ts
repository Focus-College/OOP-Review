import {Person} from '../src/classes/class.person'

import { expect } from "chai";
import "mocha";

describe("Person Class", () => {

    const person = new Person("Testy", "McTesterson")
    person.birthdate = new Date("1980/03/25")
    it("should be an instance of Person", () => {
        expect(person).to.be.instanceOf(Person)
    });
    it("should have an id property", () => {
        expect(person.id).to.be.undefined
    })
    it("should have the first name Testy", ()=>{
        expect(person.firstname).to.equal("Testy")
    })
    it("should have the last name McTesterson", () =>{
        expect(person.lastname).to.equal("McTesterson")
    })
    it("should have the name Testy McTesterson", () => {
        expect(person.name).to.equal("Testy McTesterson")
    })
    it("should have a birthdate", () => {
        expect(person.birthdate).to.exist
    })
    it("should be 40 years old", () => {
        expect(person.calculateAge()).to.equal(40)
    })
});
