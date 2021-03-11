import { expect } from "chai";
import "mocha";

import { Class1 } from '../src/class1';

describe("Test Class 1", () => {
    it("should have property id", () => {
        
        const instance1 = new Class1();
        
        expect(instance1).to.be.instanceOf(Class1);

    });
});
