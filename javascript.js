
console.log('hello world');
alert('hello');
// comment 

let name='saifl'; // if you want to reassign variable
const pi = 3.1415; // don't want to change value

let name='saiful;
let age =24;
let isApproved = true;
let firstName = null;
let lastName = undefined;
typeof name; // output: string

// Object

let person = {
    name: 'saiful',
    age: 23
} // curly bracket defines object

person.name ='antur'; // dot notation
person['name'] = 'islam'; // bracket notation
console.log(person.name);

// Array

let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
selectedColors[3] = 12;
console.log(selectedColors);
console.log(typeof selectedColors); // output: object

// Function

function greet ( name ){
    console.log('hello ' + name);
}
greet('saiful');
// here name is a perameter and 'saiful' is a argument
function calculator(a , b){
    let x = a+b;
    return x;
}
let result = calculator(a=2,b=2);
console.log (result);

//Loops

for (let i=0; i<=5; i++){
    if(i % 2 !== 0) {
        console.log(i);
    }
}  


const names = [ "facebook", "google", "instagram", "youtube"];
for (let i=0; i<names.length; i++){
    console.log(names[i]);
}


//Loops [ For of & For in ]

const names = ["google", "facebook", "youtube", "instagram"];
for (let n of names){
    console.log(n);
} // for of is used on array majorly 
for (let n in names){
    console.log(n);
}// Output: 0 1 2 3 

console.log("--------------");

const symbols = {
    yt: "youtube",
    fb: "facebook",
    ig: "instagram",
}
for (let n in symbols){
    console.log(`key is ${n} and value is ${symbols[n]} `);
}// for in is used on Object majorly 



/* Var, Let, Const
    * Var: the variable defined is visible in the entire function.
    * Let: the variable defined is visible only in the block it is defined in.
    * Const: makes the variable a constant
    * Use const over let and let over var wherever possible 
	
** Objects **
   * const person = {
   		"name": "Mosh",
   		walk() {},
   		talk() {}
   	}
   	Above is an object with 1 property and 2 methods.
   	Another way defining a method member in an object is:
   	walk: function() {} //not recommended
   	* Invoking method of an object: person.walk()
   	* Accessing property of object
   		** When the property is known in advance: person["name"]
   		** When the property is not known in advance: person[variable.value] //variable.value == "name"	
*/
let person = {
    name: 'saiful',
    age: 20,
    walk(){
       console.log('i can walk');
    }
}
console.log(person.name);
person.walk();


let person = {
    name: 'saiful',
    age: 20,
    walk(){
       console.log(this);
    }
};
person.walk();

const walk = person.walk.bind(person);
walk();

const calculate = function(number){
    return number*number;
}
const calculate1 = number => number*number;
console.log(calculate1(5));


const jobs = [
    {id: 1, isActive:true},
    {id: 2, isActive:true},
    {id: 3, isActive:false},
]
const activeJobs = jobs.filter(function(job) {return job.isActive; }); 
const activeJobs1 = jobs.filter(job => job.isActive);
console.log(activeJobs);
console.log(activeJobs1);

//Map

const colors = ['red ', 'green', 'yellow'];
const color = colors.map(function(color) {return '<li> ' + color + ' </li>'});
const color1 = colors.map( color => '<li> ' + color + ' </li>');
const color2 = colors.map( color => `<li> ${color} </li>`);
console.log(color1);

//Object Destructuring

const address = {
    street: '',
    city: '',
    country: '',
}
const street = address.street;
const city = address.city;
const country = address.country;

const {street, city, country} = address;
const {street: st } = address;

//Spread Operator

const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
const combined1 = [...first,'a', ...second];

console.log(combined);
console.log(combined1);

const clone = [ ...first ];
console.log(clone);


const first = {firstName: 'saiful'};
const second = { lastName: 'islam'};

const combined = { ...first, ...second, age: 24 };
console.log(combined);

const clone = {...first}
console.log(clone);

//Class

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    walk(){
        console.log( this.name + ' can walk & his age is ' + this.age);
    }
}
const person = new Person('saiful', 24);
person.walk();
console.log(person.age);


// Inheritance


class Person {
    constructor(name){
        this.name = name;
    };
     walk(){
        console.log(`${this.name} can walk`);
    };
}

class Teacher extends Person {
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log(this.name + ' can teach & he got ' + this.degree + ' degree');
    }
}

const teacher = new Teacher('saiful', 'Msc');
teacher.teach();
teacher.walk();


//Modules
	// Objects in a module are private by default
	
import {Person} from './person'

export Teacher extends Person{
}



















