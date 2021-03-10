//Parametros

//antes de ES6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || '29';
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6
function newFunction2(name = 'oscar', age = '29', country = 'MX') {
    console.log(name, age, country);
};

newFunction2(); //toma elementos por defecto
newFunction2('Ricardo', '23', 'CO');

//concatenación

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multilinea
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n" +
    "otra frase epica."
    //es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase
`;

console.log(lorem);
console.log(lorem2);

//desestructuración
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);
//es6
let { name, age, country } = person;
console.log(name, age, country);

//spread operator - operador de propagación

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//propiedad de objetos mejorada
let name = 'Oscar';
let age = 32;

obj = { name: name, age: age };

//es6
obj2 = { name, age };
console.log(obj2);

//arrow function
const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Giselle', age: 29 }
]

let listOfNames = names.map(function(item) {
        console.log(item.name);
    })
    //es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    //code
}

const listOfNames4 = name => {
    //code
}

const square = num => num * num;

//promesas - en algun momento va a pasar

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(console.error));

//clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(2, 2));

//Modulos
import { hello } from './module.js';

hello();

//generadores
function* helloWorld() {
    if (true) { //condición para la primera vez que se ejecuta
        yield 'Hello, ';
    }
    if (true) { //condición para la segunda vez que se ejecuta
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value); //Hello,
console.log(generatorHello.next().value); //World
console.log(generatorHello.next().value); //undefined