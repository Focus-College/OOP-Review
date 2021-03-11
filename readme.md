# Software Development: Object Oriented Programming Review

After each exercise, please commit with a message matching the Excercise Title below and then push to your repo. Create a pull request after your first commit in order to submit your result.

<br/>

## Exercise 1: Person Class (15 Minutes)
---

Create a class named `Person` in a file named `class.person.ts`:
- `Person` has 4 properties: id, firstName, lastName, name.
- The "name" property is always `firstName lastName`

<br/>

## Exercise 2: Birthdate & Age (30 Minutes)
---
Add properties to the person class:

- public birthdate: Date
- public age: number `// must reflect the person's age based on the birthdate`
- private: `// a mechanism to access the birthdate as a string`

You may use an external library like [dayjs](https://day.js.org/docs/en/installation/installation) but it's not required. The birthdate MUST be of type Date.

<br/>

## Exercise 3: Property Class
---

Create a class named `Property` in a file named `class.property.ts`:

- property has 3 properties: id, address, and owner.
- address is a string
- owner is a Person
- owner MUST be set
- address MUST be set and READ ONLY

<br/>

## Exercise 4: Organization Class
---

Create a class named `Organization` in a file named `class.organization.ts`:

- has 2 properties: id, name

Create an interface that has two properties:

- id: string
- name: string

Ensure both the `Person` class and the `Organization` class implement the new interface

<br/>

## Exercise 5: Property modification
---

Modify the `Property` class to:
- have multiple owners
- allow any class that matches the interface created in Exercise 4 to be an owner

<br/>

## Exercise 6: Property Builder
---

Create a `PropertyBuilder` that provides steps to:
- create a `Property` instance
- add a property address (you must be able to set the address after instantitation, but the property must remain read only)
- add owners individually

The test should:
- Add multiple owners with the builder
- Add a single owner with the builder

<br/>

## Exercise 7: Property Rentals
---

Create a `PropertyRental` class that inherits from `Property`, with the following properties:
- termStart: Date
- termEnd: Date
- lengthOfTerm: number `// duration of days between termStart and termEnd`

And method:
- isTermOver( on?:Date ): boolean `// determines if the term is over on date or now if Date is not provided`
- leftInTerm( on?:Date ): number `// number of days left in term from date or now if Date is not provided`

<br/>

## Exercise 8: Organization Suffix
---

With the `Organization` class:

- Add a `suffix` property to the organization that can be only one of these values:
  LTD, LTD., Ltd, Ltd., LLC, INC, INC. Inc, Inc.
- Add a `dba` property that is a string that can be any string
- Add a `legalName` property that is the `${name} ${suffix}`
- Add a `sell` method that transfers one or more owners share of an organization to another group of owners

<br/>

## Exercise 9: Properties Collection
---

Create a `Properties` Collection: 
- It should ONLY contain elements that are a Property.
- It should have a method called `withOwners( owners:InterfaceFromExercise4 )` that returns a collection of properties where each property includes at least one of the owners from the list of owners

<br/>

## Exercise 10: Rental Identifier
---

Add the following property to the `PropertyRental` class:
- `tenants:InterfaceFromExercise4[]`
- throw an error if the tenent is in the `owners` of the property