import { assert, expect } from "chai";
import "mocha";
import {Organization} from "../src/classes/class.organization"



describe("an Organization", () => {

    
const xorg = new Organization('112', 'Xorg')

    it("creates an organization type object ", () => {
              
      expect(xorg).to.be.instanceOf(Organization);
        
    });
       
    
    it("created organization has a name", () => {

        expect(xorg.id).to.be.eq('112')

    });
    
    it("created organization has an id", () => {
              
        
        expect(xorg.name).to.be.eq('Xorg')
      
        
    });
});