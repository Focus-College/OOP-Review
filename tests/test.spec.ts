import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person';
import {Organization} from '../src/organization/class.organization';
import {Property} from '../src/Property/class.property';
import {PropertyBuilder} from '../src/Property/property.builder';
import {PropertyRental} from '../src/Property/property.rental';

describe("Class Person", () => {
    it("Should return id as 1", () => {
        let person1 = new Person("John", "Doe")
        person1.setId()
        expect(person1.id).to.equal(person1.id)
    });
    it("Should return firstName", () => {
        let person1 = new Person("John", "Doe")
        expect(person1.firstName).to.equal("John")
    });
    it("Should return lastName", () => {
        let person1 = new Person("John", "Doe")
        expect(person1.lastName).to.equal("Doe")
    });
    it("Should return name", () => {
        let person1 = new Person("John", "Doe")
        expect(person1.name).to.equal("John Doe")
    });
});


describe("Class Person Pt.2", () => {
    let person1 = new Person("John", "Doe")
    person1.birthDate = new Date("1983-04-05")
    it("should include a birthdate", () => {
        expect(person1.birthDate).to.exist
    });
    it("should include the birthdate as age", () => {
        person1.getAge()
        expect(person1.age).to.exist
    });
});

describe("Property Exercise 3", () => {

    let joe = new Person("John", "Doe")
    let p1 = new Property()
    p1.setAddress("Hemming Way")
    p1.newOwner(joe)
    p1.getAddress()
    p1.setId()
    it("should have an id", () => {
        expect(p1.id).to.equal(p1.id)
    });
    it("should have an address", () => {
        expect(p1.getAddress()).to.equal("Hemming Way")
    });
    it("should have an owner", () => {
        expect(p1.owners).to.include(joe)
    });
});

describe("Organization Exercise 4", () => {
    let GeraldsContracting = new Organization("Geralds Contracting")
    GeraldsContracting.setId()
    it("should include an id", () => {
        expect(GeraldsContracting.id).to.equal(GeraldsContracting.id)
    });
    it("should create the organizations legalName with a suffix", () => {
        expect(GeraldsContracting.legalName).to.equal("Geralds Contracting LTD.")
    });
});

describe("Property Exercise 5", () => {
    let joe = new Person("John", "Doe")
    let may = new Person("May", "Doe")
    let p1 = new Property()
    p1.setAddress("Hemming Way")
    p1.newOwner(joe)
    p1.getAddress()
    p1.setId()
    
    it("should have an id", () => {
        expect(p1.id).to.equal(p1.id)
    });
    it("should have an address", () => {
        expect(p1.getAddress()).to.equal("Hemming Way")
    });
    it("should have owners", () => {
        expect(p1.owners).to.include(joe)
    });
});

describe("Property Builder", () => {
    let may = new Person("May", "Parker")
    let joe = new Person("Joe", "Parker")
    let builder = new PropertyBuilder()
    builder.setAddress("Sewing Way")
    builder.setOwners(may)
    builder.setOwners(joe)
    builder.getProperty()

    it("should have an address", () => {
        expect(builder.property.getAddress()).to.include("Sewing Way")
    });

    it("should have single owner", () => {
        expect(builder.property.owners).to.include(joe)
    });

    it("should have multiple owners", () => {
        expect(builder.property.owners).to.have.members([joe, may])
    });
});

describe("Property Rentals", () => {

    let startDate = new Date("2020-01-01")
    let endDate = new Date("2021-01-01")
    let testDate = new Date("2020-01-07")
    let pastDate = new Date("2021-07-05")
    let rental = new PropertyRental(startDate, endDate);

    it("should expect isTermOver to be true", () => {
        expect(rental.isTermOver(pastDate)).to.be.true;
    });

    it("should expect isTermOver to be false", () => {
        expect(rental.isTermOver(testDate)).to.be.false;
    });

    it("should expect 360 days left in term", () => {
        expect(rental.leftInTerm(testDate)).to.equal(360);
    });

});

