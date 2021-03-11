// console.log("Software Developmnet: Object Oriented Programming")

import {Person} from './class/class.person';
import { Property } from './class/class.property';

let date: Date = new Date("1979-08-30");  


const khatab = new Person("khatab","AL-Daghistani");
khatab.birthDate = date;
console.log(khatab.getAge());


const owner = new Property("khatab","AL-Daghistani","kelowna SW rd")
console.log(owner);