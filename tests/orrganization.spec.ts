import { expect } from "chai";
import "mocha";

import { Organization } from '../src/class/class.organization'

describe("Test Organization, create new org", () => {
    it("should be return name, Stargazer", () => {

        const organization = new Organization();
        organization.name = "Stargazer"
    
        expect(organization.name).to.equal("Stargazer")
        
    });

});
