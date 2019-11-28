"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, email, age, isSubscriber) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isSubscriber = isSubscriber;
    }
    Student.prototype.register = function () {
        console.log('Registrado com sucesso');
    };
    Student.prototype.showInfo = function () {
        console.log((this.isSubscriber ? 'Aluno(a)' : 'Usuario(a)') + " " + this.name + " - " + this.email + ", " + this.age + " anos.");
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=Student.js.map