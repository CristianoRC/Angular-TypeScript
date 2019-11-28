function sum(num1: number, num2: number): number {
  return num1 + num2
}

function multiply(num1: number, num2: number, num3?: number): number {
  //num3: Opcional

  let result: number = num1 * num2

  if (num3)
    result *= num3

  return result
}


function printResult(description: string, result: number): void {
  console.log(`${description}: ${result}`)
}

const divede = (num1: number, num2: number = 1): number => num1 / num2


let sumResult: number = sum(1568, 6574)
printResult('Sum', sumResult)

let multiplicationResult: number = multiply(3, 5, 10.5)
printResult('Multiplication', multiplicationResult)

let divisionResult: number = divede(3, 0)
printResult('Division', divisionResult)

divisionResult = divede(3)
printResult('Division', divisionResult)