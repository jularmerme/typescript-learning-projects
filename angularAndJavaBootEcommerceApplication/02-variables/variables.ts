let found: boolean = true;
let grade: number = 56.4;
let firstName: string = 'Bart';
let lastName: string = 'Simpson';

// We cab assign new values to this variables keeping the same data type

found = false;
grade = 9.0;
firstName = `Lisa`;
lastName = 'Milhouse';

/****
 * type: any -> you lose security factor
 */

console.log(found);
console.log(`The grade is ` + grade);
console.log(`Hi ` + firstName + ` ` + lastName);

console.log(`Hi ${firstName} ${lastName}`);
