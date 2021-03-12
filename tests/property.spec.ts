import { assert, expect } from "chai";
import "mocha";

//Classes
import {Person} from "../src/classes/class.person";
import {Property} from "../src/classes/class.property";



describe("Property", () => {

    const mockDate = new Date("March 13, 2020 4:13:00")
    const Doe = new Person("12421", "Jack", "Langely", mockDate, 200);
    const Bat = new Property(123);

    it("creates a new instance of property", () => {
      
        expect(Bat).to.be.instanceOf(Property);

    });

    it("has no adress", () => {
      
        expect(Bat.oldAdress).to.be.eq(undefined);

    });

    it("it has no owner", () => {
      
        expect(Bat.owner).to.be.eql([]);
    });

    it("it has an id", () => {
      
        expect(Bat.id).to.be.eq(123);

    });

    it("can set an adress", () => {
        
        Bat.newAdress= "Hello Street";
        expect(Bat.oldAdress).to.be.eq("Hello Street")
        
    });

    it("it can set an owner", () => {
      
        Bat.newOwner(Doe);
        expect(Bat.owner.length).to.be.equal(1)

    });

    it("it can read an adress", () => {

        Bat.newAdress= "Hello Street";
        expect(Bat.oldAdress).to.be.eq("Hello Street")

    });
    
    it("is adress readonly... ", () => {
              
        //  expect(Bat.adress).to.throw("Error: can't be acessed outside of gets and sets")
        //it throws an error as adress can't be acessed.
        
    });

    it("can have an owner, or multiple owners. ", () => {
        
        const Doe1= new Person("12421", "Jack", "Langely", mockDate, 200);
        const Doe2 = new Person("12421", "Jack", "Langely", mockDate, 200);
        const Doe3 = new Person("12421", "Jack", "Langely", mockDate, 200);
        const Doe4 = new Person("12421", "Jack", "Langely", mockDate, 200);
        const Doe5 = new Person("12421", "Jack", "Langely", mockDate, 200);

        const x = Bat.owner.length;
        Bat.newOwner(Doe1);
        Bat.newOwner(Doe2);
        Bat.newOwner(Doe3);
        Bat.newOwner(Doe4);
        Bat.newOwner(Doe5);


        expect(Bat.owner.length).to.be.eq(x+5);
        
    });

    it("it can delete owners. ", () => {
        
        Bat.newOwner(Doe);
        let x = Bat.owner.length

        Bat.deleteOwner( { id: "12421", name: "Jack"});       
        expect(Bat.owner.length).to.be.eq(x-1);
    });

    it("Property owners match IEntity Interface. ", () => {
              
    const Doe1= new Person("12421", "Jack", "Langely", mockDate, 200);
    Bat.newOwner(Doe1);
    expect(Bat.owner[0]).to.be.eql({ id: '12421',firstName: 'Jack', lastName: 'Langely', birthDate:mockDate, age:200, name: 'JackLangely'})
    });
        
});