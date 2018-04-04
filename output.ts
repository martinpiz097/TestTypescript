console.log("Hola Mundo");

// types

// Tipos fijos
// tsc archivo -w --> espera cambio en archivo y compila automaticamente

// Se le dice a la variable que sera string
var myString: string = "Hello World";
myString = 22+"";
myString.split(".");
var myNumber:number = 22;
var bool:boolean=true;

// any sirve para dejarlo como cualquier tipo de dato
var myVar:any = "hello";
myVar = 22; // valido solo en js
myVar = false;

// Strings

document.writeln(myString);
document.writeln(myNumber.toString());

// Arrays

// Especificado que contiene cualquier tipo de dato como arreglo
var stringArray:any[] = ["","",""];
var strArray:string[] = ["xd"];
// los arreglos tambien pueden ser variable: [number, string];

// let = var
let myVoid: void = undefined;
let myNull: null = null;
let myUndef: undefined = undefined;

document.writeln(typeof(myVoid));
document.writeln(typeof(myNull));
document.writeln(typeof(myUndef));

// Functions

// pueden colocarse los datos sin su tipo explicito
function getSum(num1:number, num2:number):number {
    return num1+num2;
}

// crear una funcion y retornarla en una variable
// parametros number o string
let mySum = function(num1:number|string, num2:number|string):number {
    if(typeof(num1)==='string')
        num1 = parseInt(num1);
    if(typeof(num2)==='string')
        num2 = parseInt(num2);
}

// ? --> Parametro opcional
function getName(firstName:string, lastName?:string):string {
    if(lastName == undefined)
        return firstName;
    return `${firstName} ${lastName}`;
}

document.writeln(getName("Martín", "Pizarro"));