import {Person} from '../src/classes/person'

import { expect } from "chai";
import "mocha";

describe("Person Class", () => {

    const person = new Person("Testy", "McTesterson")
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
});
