import { expect } from "chai";
import "mocha";
import { PropertyRental } from '../src/class/class.PropertyRental'

describe("Test PropertyRental, ", () => {
    it("should be create instance of Propert Rental", () => {

        const termStart =  new Date("2020-08-30")
        const termEnd = new Date("2022-01-30")

        const propertyRental = new PropertyRental( termStart, termEnd )

        expect(propertyRental).to.be.instanceOf(PropertyRental)
        
    });

    it("should not be create instance of Propert Rental", () => {

        const termStart =  new Date("2020-08-30")
        const termEnd = new Date("2019-01-30")

        const propertyRental = new PropertyRental( termStart, termEnd )

        expect(propertyRental._termStart).to.be.equal(undefined)
        
    });



    it("should be return length of term, 518", () => {

        const termStart =  new Date("2020-08-30")
        const termEnd = new Date("2022-01-30")

        const propertyRental = new PropertyRental( termStart, termEnd )


        expect(propertyRental._lengthOfTerm).to.equal(518)
        
    });

    it("should be return term over, false", () => {

        const termStart =  new Date("2020-08-30")
        const termEnd = new Date("2022-01-30")

        const propertyRental = new PropertyRental( termStart, termEnd )


        expect(propertyRental.isTermOver(termEnd)).to.be.equal(false)
        
    });



   

});



