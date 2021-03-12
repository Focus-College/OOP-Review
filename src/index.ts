import {Person} from './class.person';
const person = new Person("Colby", "Boettcher");

//here we set the birthdate
person.setBirthdate(1993, 8, 6);

//person.age automatically calculates the age of the person
console.log("The Person is ", person.age , " years old");