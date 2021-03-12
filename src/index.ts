// console.log("Software Developmnet: Object Oriented Programming")

import {Person} from './class/class.person';
import { Property, PropertyBuilder } from './class/class.property';

let date: Date = new Date("1979-08-30");  


const khatab = new Person("khatab","AL-Daghistani");
khatab.birthDate = date;
console.log(khatab.getAge());

const propertyBuilder= new PropertyBuilder()
propertyBuilder.setAddress("kelowna SW rd")
propertyBuilder.setOwner(khatab);

console.log(propertyBuilder);

const dani = new Person("Dani","Louis");

propertyBuilder.setOwner(dani);
console.log("**************");

console.log(propertyBuilder.getProperty().owners());
