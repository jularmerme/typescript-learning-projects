let found: boolean = true;
let grade: number = 99.4;
let firstName: string = "John";
let lastName: "Smith";

// found = "String";

console.log(found);
console.log("The grade is " + grade);
console.log(`Hi ${firstName} ${lastName}`);

let reviews: number[] = [5, 5, 2.4, 1, 9];
let total: number = 0;

for (let i of reviews) {
  console.log(i);
  total += i;
}

console.log(`The Average is: ${total} / ${reviews.length}`);

let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let tempSport of sportOne) {
  if (tempSport === "Cricket") {
    console.log(`${tempSport} << My Favorite!`);
  } else {
    console.log(tempSport);
  }
}

sportOne.push("Baseball");
sportOne.push("Football");

for (let i of sportOne) {
  console.log(i);
}
