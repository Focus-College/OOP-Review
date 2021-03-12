import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person'

describe("Test Person Class", () => {

    it("should have name equal the firstName plus the LastName", () => {
        const person = new Person("Gil", "Henry");
        expect(person.firstName + " " + person.lastName).to.equal(person.name);
    });

    it("should should be able to set and read a birthday", () => {
        const person = new Person("Hue", "Lamponi");
        person.setBirthdate(2001, 10, 10);
        expect(person.birthday).to.equal("2001/10/10");
    });

    it("should return an age based on the birthdate", () => {
        const person = new Person("George", "Batton");
        person.setBirthdate(1993, 8, 6);
        expect(person.age).to.equal("27");
    });
    
});
