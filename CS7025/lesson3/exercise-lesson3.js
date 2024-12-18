// CONDITIONAL STATEMENTS
let score = 77;

if (score >= 70) {
    console.log("Excellent! You scored an A.");
} else if (score >= 60) {
    console.log("Good job! You scored a B.");
} else if (score >= 50) {
    console.log("You passed with a C.");
} else {
    console.log("Unfortunately, you failed.");
}


// FOR LOOP
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// WHILE LOOP
let count = 1;
console.log("While loop: Counting to 3:");
while (count <= 3) {
    console.log("Count:", count);
    count++;
}

// DO/WHILE LOOP
let num = 5;
console.log("Do/While loop: Executing at least once:");
do {
    console.log("Number is:", num);
    num--;
} while (num > 0);


const student = { name: "Haiqi", age: 24, grade: "A" };
console.log("For/In loop: Student details:");
for (let key in student) {
    console.log(key + ":", student[key]);
}
