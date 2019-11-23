//Basicos
var integer = 6;
var decimal = 6.0;
var isAdmin = false;
var userName = "Cristiano";
/* --------------------------------- */
//Listas
var numbers = [0, 1, 2, 3];
var users = ['Teste01', 'Teste02'];
/* --------------------------------- */
//Tuplas
var user;
user = [15, 'Cristiano'];
console.log(user[0] + " - " + user[1]);
/* --------------------------------- */
//Enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 150] = "Blue";
    Color[Color["Red"] = 151] = "Red";
    Color[Color["Green"] = 152] = "Green";
})(Color || (Color = {}));
var colorId = Color.Blue;
var colorName = Color[colorId];
console.log(colorId + " - " + colorName);
/* --------------------------------- */
//Any
var anyType = 15;
console.log(anyType);
anyType = "Test";
console.log(anyType);
anyType = true;
console.log(anyType);
//Any List
var anyArray = [];
anyArray.push(15);
anyArray.push('Teste');
anyArray.push(true);
var text;
text = anyArray.reduce(function (prev, current) { return prev + " " + current; });
console.log(text);
/* --------------------------------- */
//Object
var car = { plate: "AAA-8888", name: "350Z", color: Color[150] };
var carText;
carText = car.plate + " - " + car.name + " - " + car.color;
console.log(carText);
/* --------------------------------- */
//Void
function sayHiTo(name) {
    console.log("Hi! " + name);
}
sayHiTo("Cristiano");
//# sourceMappingURL=index.js.map