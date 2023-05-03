const teacher = {
    name: 'Rayffer',
    lastName: 'Jaramillo'
};

console.log('teacher:', teacher);

//Primitivos

//Booleans
//Declaracion implicita
const isTeacher = true; // toma el valor con el cual fue declarado y ese es el tipo
let isPlayer = true; // toma el tipo del valor que se le asigno
isPlayer = false

//Declaracion explicita
let isChampion: boolean = false;

//Que se puede hacer con booleanos
//if ternario
//let result = hasErrors ? 'tiene errores' : 'no tiene errors';
//diferente, tripe igual, se puede usar todos los operadores


// string
const firstName = 'rayffer';
const lastName = 'Jaramillo';

let fullName: string = 'su nombre es: ${firstName} ${lastName}, bienvenido';
console.log(fullName.toUpperCase(   ));


//Number
let countStudents: number = 29.5;
let average: number = 4.5;
console.log(average.toFixed());

//Tipos de objetos

//Arrays
let fruits = ['pera', 'banano'];//implicita
let sports: string[] = ['futbol','beisbol']; //explicito

let studentsBuenos: Array<string> = ['nico','yhoan'];
let students: Array<string | null> = ['nico','yhoan', null];// union types
console.log(students.filter((students) => students !== null));


//Tuplas
let exampleTuple = [null, 'hola', '', null];
let otroExampletuple: [string, null] = ['hola', null, 'hola', null];//tupla, el orden importa

//creando nuestro propios typos
type stringOrNull = string | null;

type statusCode = 'active' | 'inactive';
let studentStatus; statusCode = 'inactive';