import { expect } from "chai";
import "mocha";
import { Organization } from "../src/classes/class.organization";
import { Person } from "../src/classes/class.person";
import {Property} from "../src/classes/class.property"
import {PropertiesCollection} from '../src/classes/class.property'

describe("Property Collections", () => {
    const propsCollection = new PropertiesCollection()
    const property = new Property()
    const person = new Person("Bill", "Bill")
    property.addOwner(person)
    const prop2 = new Property()
    const prop3 = new Property()
    prop3.addOwner(person)
    const org = new Organization()
    org.name = "Adsf"
    org.suffix = "Inc."
    propsCollection.props.push(property)
    propsCollection.props.push(prop3)
    it("should be a PropertiesCollection", () => {
        expect(propsCollection).to.be.instanceOf(PropertiesCollection)
    });
    it("should contain the first property", () => {
        expect(propsCollection.props).to.contain(property)
    })
    it("should not contain the second property", () => {
        expect(propsCollection.props).to.not.contain(prop2)
    })
    it("should add the second property to the collection", () => {
        propsCollection.props.push(prop2)
        expect(propsCollection.props).to.contain(prop2)
    })
    it("should not return any properties", () => {
        expect(propsCollection.withOwners(org)).to.be.empty
    })
    it("should return the properties owned by Bill Bill", () => {
        const billsProps = propsCollection.withOwners(person)
        expect(billsProps).to.contain(property)
        expect(billsProps).to.contain(prop3)
    })
});
