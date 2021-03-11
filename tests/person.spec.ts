import { expect } from "chai";
import "mocha";
import {Person} from '../src/class.person'

describe("Test Person", () => {
    it("should be return name", () => {
        const khatab = new Person("khatab","AL-Daghistani");
    
        expect(khatab.name).to.equal("khatab AL-Daghistani");
    });
});
