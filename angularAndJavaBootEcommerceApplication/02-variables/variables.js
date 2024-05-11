var found = true;
var grade = 56.4;
var firstName = 'Bart';
var lastName = 'Simpson';
// We cab assign new values to this variables keeping the same data type
found = false;
grade = 9.0;
firstName = "Lisa";
lastName = 'Milhouse';
/****
 * type: any -> you lose security factor
 */
console.log(found);
console.log("The grade is " + grade);
console.log("Using old school way: Hi " + firstName + " " + lastName);
console.log("Using Template Literals: Hi ".concat(firstName, " ").concat(lastName));
