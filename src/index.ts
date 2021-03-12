import {Person} from './class.person';
import {Property} from './class.property'

const person = new Person("Colby", "Boettcher");
const newPerson = new Person("Jim", "Huche");

const property = new Property(person, "123 Bigshot Lane");
property.removeOwner(person);
property.addOwner(newPerson);


console.log(property);

// //person.age automatically calculates the age of the person
// console.log("The Person is ", person.age , " years old");