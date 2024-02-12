"use strict";
//array of objects
const cars=[
{name:"Audi", number:5, color:"black", company:"Volkswagon"},
{name:"Dodge Challenger", number:8, color:"red", company:"Stellantis"},
{name:"Mini cooper", number:22, color:"green", company:"BMW"},
{name:"Rolls Royce", number:15, color:"black", company:"BMW"},
{name:"porsche", number:12, color:"black", company:"Volkswagon"},
];
//car names
let carNames=cars.map((x)=>x.name);
console.log(carNames);
//total cars
let carsNumbers = cars.map((x)=>x.number);
let totalCars = carsNumbers.reduce((a,b)=>a+b);
console.log(totalCars);


