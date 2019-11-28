import { IStudent } from './IStudent'
import { ISubscriber } from './ISubscriber'

export class Student implements IStudent, ISubscriber {
  constructor(public name: string, public email: string, public age: number, public isSubscriber: boolean) { }

  register(): void {
    console.log('Registrado com sucesso')
  }

  showInfo() {
    console.log(`${this.isSubscriber ? 'Aluno(a)' : 'Usuario(a)'} ${this.name} - ${this.email}, ${this.age} anos.`)
  }
}