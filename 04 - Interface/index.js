"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
function run(student) {
    student.register();
    student.showInfo();
}
var cristiano = new Student_1.Student('Cristiano Cunha', 'contato@cristianoprogramador.com', 21, false);
run(cristiano);
//# sourceMappingURL=index.js.map