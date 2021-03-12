import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person'
import {Property} from '../src/class.property'
import { IEntity } from "../src/interface.entity";

describe("How the Person Class should Work", () => {

    it("should have name equal the firstName plus the LastName", () => {
        const person = new Person("Gil", "Henry");
        expect(person.firstName + " " + person.lastName).to.equal(person.name);
    });

    it("should should be able to set and read a birthday", () => {
        const person = new Person("Hue", "Lamponi");
        person.setBirthdate(2001, 10, 10);
        expect(person.getBirthday()).to.equal("2001/10/10");
    });

    it("should return an age based on the birthdate", () => {
        const person = new Person("George", "Batton");
        person.setBirthdate(1993, 8, 6);
        expect(person.getAge()).to.equal("27");
    });

});

describe("How the Properties Class should Work", () => {

    it("should have an address that is set in with constructor", () => {
        const gil = new Person("Gil", "Henry");
        const house = new Property(gil, "661 Bradford Rd");

        expect(house._address).to.equal("661 Bradford Rd");
    });

    it("should be able to change owners", () =>{
        const gil = new Person("Gil", "Henry");
        const dan = new Person("Dan", "TheMan");
        const house = new Property(gil, "661 Bradford Rd");

        house.setOwner(dan);

        expect(house._owner).to.equal(dan);
    });

});

describe("A Entity Interface", () => {
    it("should store string values", () => {
        const iEntity:IEntity = {
            id: "123",
            name:"unittest"
        }
        expect(iEntity.name).to.equal("unittest");
        expect(iEntity.id).to.equal("123");
    });

});
