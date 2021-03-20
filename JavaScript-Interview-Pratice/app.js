// // //Can you pass an anonymous function as an argument to another function

// function hello(someValue) {
//     console.log(someValue)
// }

// hello(function(){
//     return "hello world";
// });

// // // take values from an object and push into an array

// // var empArr = [];
// // let x = {
// //     a: 1,
// //     b: 2
// // }

// // const passFunction = () => {
// //     const { a, b } = x;
// //     empArr.push(a, b)
// // }
// // passFunction()
// // console.log(empArr)

// // //reverse string

// // let c = "hi";
// // let d = "IH";

// // const reverse = (str) => str.toUpperCase().split("").reverse().join("")

// // console.log(reverse(c));

// // //Something

// // const obj = {
// //     a:1,
// //     b:2,
// //     getA(){
// //         console.log(this.a)
// //         return this;
// //     },
// //     getb(){
// //         console.log(this.b);
// //     },
// // };

// // console.log(obj.getA().getB())

// //this keyword in Javascript

// // var num = 4;

// // function outer(){
// //     var num = 2;
// //     function inner(){
// //         num++;
// //         var num = 3;
// //         console.log(num);
// //     }
// //     inner()
// // }

// // outer()

// var companies = [
//     { name: "Folio3", category: "mechanical", start: 1981, end: 2014 },
//     { name: "sterling", category: "software", start: 1988, end: 2020 },
//     { name: "softco", category: "chemical", start: 1992, end: 2016 },
//     { name: "traversey", category: "software", start: 1986, end: 2017 },
//     { name: "sosafe", category: "sales", start: 1987, end: 1999 },
//     { name: "inapp", category: "software", start: 1987, end: 1989 },
// ]

// var ages = [2, 3, 4, 22, 33, 43, 87, 56, 98, 5, 67, 43, 90, 68, 54];

// //for Each

// // companies.forEach((company, index, companies) => {
// //     console.log(company)
// //     console.log(index)
// //     console.log(companies)
// // })

// //filter

// // var canDrink = ages.filter((age) => {
// //     if (age >= 21) {
// //         return true;
// //     }
// // })

// // console.log(canDrink);

// // var canDrink = ages.filter(age => age <= 21 ? true : false)

// // console.log(canDrink)

// // var retailCompanies = companies.filter((company) => {
// //     if (company.category === "software") {
// //         return true;
// //     }
// // })

// // console.log(retailCompanies)

// // const retailCompanies = companies.filter(company => company.category === "software");
// // const eightyiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
// // const lastedTenYears = companies.filter(company => (company.end - company.start > 10));

// // console.log(lastedTenYears);
// // console.log(eightyiesCompanies);
// // console.log(retailCompanies);

// // var something = [ 
// //     {id:1,expense:200,balance:1200},
// //     {id:1,expense:200,balance:1200},
// //     {id:2,expense:300,balance:1200},
// //     {id:2,expense:300,balance:1200},
// //     {id:3,expense:300,balance:1200},
// // ]

// // var somethingFilter = something.filter((some)=>{
// //     if(some.id === 1){
// //         return true;
// //     }
// // })

// // console.log(somethingFilter)

// //map
// // const companyNames = companies.map( (company)=>{
// //     return company.name;
// // } )

// // console.log(companyNames);

// // const agesSquare = ages.map(age => Math.sqrt(age)).map(age => age * 2)

// // console.log(agesSquare)

// // var sortedCompanies = companies.sort((a, b) => {
// //     if (a.start > b.start) {
// //         return 1;
// //     } else {
// //         return -1;
// //     }
// // })

// // var sortedAges = ages.sort((a, b) => a - b)

// // console.log(sortedAges)


// // var something = [
// //     { id: 1, expense: 200, balance: 1200 },
// //     { id: 1, expense: 200, balance: 1200 },
// //     { id: 2, expense: 300, balance: 1200 },
// //     { id: 2, expense: 300, balance: 1200 },
// //     { id: 3, expense: 300, balance: 1200 },
// // ]

// // var someFilter = something.sort((a, b) => {
// //     if (a.id === b.id) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // })

// // console.log(someFilter)


// //Reduce

// var ageSum = ages.reduce((total, age) => {
//     return total + age
// }, 0)


// var totalYears = companies.reduce((total,company) => {
//     return total + (company.end - company.start)
// }, 0)

// console.log(totalYears);







// df bw let and const

// let a = 'hello'; // globally scoped

// var b = 'world'; // globally scoped

// console.log(window.a); // undefined //let
// console.log(window.b); // 'world'  //var

// var a = 'hello';
// var a = 'world'; // No problem, 'hello' is replaced.

// let b = 'hello';
// b = 'world'; // SyntaxError: Identifier 'b' has already been declared

// const myAwesomeArray = [
//     { id: 1, name: "john" },
//     { id: 2, name: "Ali" },
//     { id: 3, name: "Mass" },
// ]

// myAwesomeArray.forEach(element => console.log(element.name));

//map
const myAwesomeArray = [5, 4, 3, 2, 1];

const newArr = myAwesomeArray.map(x => x * x)

// console.log(newArr)

console.log(window)



















