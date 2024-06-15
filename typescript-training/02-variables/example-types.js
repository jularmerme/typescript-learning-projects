var found = true;
var grade = 99.4;
var firstName = "John";
var lastName;
// found = "String";
console.log(found);
console.log("The grade is " + grade);
console.log("Hi ".concat(firstName, " ").concat(lastName));
var reviews = [5, 5, 2.4, 1, 9];
var total = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var i = reviews_1[_i];
    console.log(i);
    total += i;
}
console.log("The Average is: ".concat(total, " / ").concat(reviews.length));
var sportOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _a = 0, sportOne_1 = sportOne; _a < sportOne_1.length; _a++) {
    var tempSport = sportOne_1[_a];
    if (tempSport === "Cricket") {
        console.log("".concat(tempSport, " << My Favorite!"));
    }
    else {
        console.log(tempSport);
    }
}
sportOne.push("Baseball");
sportOne.push("Football");
for (var _b = 0, sportOne_2 = sportOne; _b < sportOne_2.length; _b++) {
    var i = sportOne_2[_b];
    console.log(i);
}
