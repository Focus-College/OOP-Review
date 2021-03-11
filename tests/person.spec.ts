import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person'

describe("Test Person", () => {
    it("should be return name, khatab AL-Daghistani", () => {
        const khatab = new Person("khatab","AL-Daghistani");
    
        expect(khatab.name).to.equal("khatab AL-Daghistani");
    });

    it("should be return age, 42", () => {
        let date: Date = new Date("1979-08-30");  


        const khatab = new Person("khatab","AL-Daghistani");
        khatab.birthDate = date;
        
        expect(khatab.getAge()).to.equal(42);
    });


});
