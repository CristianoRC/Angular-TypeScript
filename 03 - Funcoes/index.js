function sum(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2, num3) {
    //num3: Opcional
    var result = num1 * num2;
    if (num3)
        result *= num3;
    return result;
}
function printResult(description, result) {
    console.log(description + ": " + result);
}
var divede = function (num1, num2) {
    if (num2 === void 0) { num2 = 1; }
    return num1 / num2;
};
var sumResult = sum(1568, 6574);
printResult('Sum', sumResult);
var multiplicationResult = multiply(3, 5, 10.5);
printResult('Multiplication', multiplicationResult);
var divisionResult = divede(3, 0);
printResult('Division', divisionResult);
divisionResult = divede(3);
printResult('Division', divisionResult);
//# sourceMappingURL=index.js.map