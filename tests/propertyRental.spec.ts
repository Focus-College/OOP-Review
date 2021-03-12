import { expect } from "chai";
import "mocha";
import {Property} from "../src/classes/class.property"
import {PropertyRentals} from '../src/classes/class.property'
import dayjs from 'dayjs'
import { Organization } from "../src/classes/class.organization";

describe("Property Rentals", () => {
    const start1 = dayjs("2020-03-24", "YYYY-MM-DD")
    const end1 = dayjs("2020-03-25", "YYYY-MM-DD")
    const start2 = dayjs("2021-03-04", 'YYYY-MM-DD')
    const end2 = dayjs("2021-04-04", "YYYY-MM-DD")
    const rentals = new PropertyRentals(start1.toDate(), end1.toDate())
    const rental2 = new PropertyRentals(start2.toDate(), end2.toDate())
    const org = new Organization()
    org.name = "Orchard Park Group"
    it("should be a PropertyRentals", () => {
        expect(rentals).to.be.instanceOf(PropertyRentals)
    });
    it("should throw an error if the start date is after the end date", () => {
        expect(() => {const rent = new PropertyRentals(dayjs("2021-03-04", "YYYY-MM-DD").toDate(), dayjs("2021-03-03", "YYYY-MM-DD").toDate())}).to.throw()
    })
    it("should add an owner to the rental property", () => {
        rentals.addOwner(org)
        expect(rentals.owners).to.contain(org)
    })
    it("should have a one day term", () => {
        expect(rentals.lengthOfTerm).to.equal(1)
    })
    it("should have a 31 day term", () => {
        expect(rental2.lengthOfTerm).to.equal(31)
    })
    it("should say the rental is over if the current date is after March 25, 2020", () => {
        expect(rentals.isTermOver()).to.be.true
    })
    it("should say the rental is not over if the current date is before April 4, 2021", () => {
        expect(rental2.isTermOver()).to.be.false
    })
    it("should say the rental is not over before March 8, 2021", () => {
        expect(rental2.isTermOver(dayjs("2021-03-08", "YYYY-MM-DD").toDate())).to.be.false
    })
    it("should say the rental is over after April 10, 2021", () => {
        expect(rental2.isTermOver(dayjs("2021-04-10", "YYYY-MM-DD").toDate())).to.be.true
    })
    it("should say 0 days left in the term", () => {
        expect(rentals.leftInTerm()).to.equal(0)
    })
    it("should say the amount of time between today's date and April 4, 2021, if run before April 4, 2021", () => {
        expect(rental2.leftInTerm()).to.equal(Math.ceil((end2.toDate().getTime() - Date.now())/(1000 * 3600 * 24)))
    })
    it("should say the amount of time between April 1st 2021 and April 4, 2021", () => {
        expect(rental2.leftInTerm(new Date("2021-04-01"))).to.equal(Math.ceil((end2.toDate().getTime() - new Date("2021-04-01").getTime())/(1000 * 3600 * 24)))
    })
});