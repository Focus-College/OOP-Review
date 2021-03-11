// console.log("Software Developmnet: Object Oriented Programming")

import {Person} from './class.person';

let date: Date = new Date("1979-08-30");  


const khatab = new Person("khatab","AL-Daghistani");
khatab.birthDate = date;
console.log(khatab.getAge());