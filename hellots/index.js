"use strict";
console.log("Hello, TS");
const students = [{
        name: "Anand",
        score: 70
    },
    {
        name: "Sinha",
        score: 20
    }];
for (const student of students) {
    console.log("Name", student.name);
}
