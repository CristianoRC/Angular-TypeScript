import { IStudent } from "./IStudent"
import { Student } from "./Student"

function run(student: IStudent) {
  student.register()
  student.showInfo()
}

let cristiano = new Student('Cristiano Cunha', 'contato@cristianoprogramador.com', 21, false)

run(cristiano)