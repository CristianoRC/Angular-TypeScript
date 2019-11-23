//Basicos
let integer: number = 6;
let decimal: number = 6.0;
let isAdmin: boolean = false;
let userName: string = "Cristiano";

/* --------------------------------- */

//Listas
let numbers: number[] = [0, 1, 2, 3];
let users: Array<string> = ['Teste01', 'Teste02'];

/* --------------------------------- */

//Tuplas

let user: [number, string];
user = [15, 'Cristiano'];

console.log(`${user[0]} - ${user[1]}`)

/* --------------------------------- */

//Enum

enum Color { Blue = 150, Red, Green }

let colorId: Color = Color.Blue;
let colorName: string = Color[colorId];
console.log(`${colorId} - ${colorName}`)


/* --------------------------------- */

//Any

let anyType: any = 15;
console.log(anyType);

anyType = "Test"
console.log(anyType);

anyType = true;
console.log(anyType);


//Any List

let anyArray: Array<any> = [];
anyArray.push(15);
anyArray.push('Teste');
anyArray.push(true);

let text: string;

text = anyArray.reduce((prev, current) => `${prev} ${current}`)

console.log(text);

/* --------------------------------- */

//Object
let car = { plate: "AAA-8888", name: "350Z", color: Color[150] };
let carText: string;

carText = `${car.plate} - ${car.name} - ${car.color}`;

console.log(carText);

/* --------------------------------- */

//Void

function sayHiTo(name: string): void {
  console.log(`Hi! ${name}`)
}

sayHiTo("Cristiano");