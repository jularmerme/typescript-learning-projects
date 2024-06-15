// 2.1. Primitive data types
/* let x: number = 5;
let y: string;
let z: boolean;
let a: Date;
let b: string[];
let c: any; */

c = "Hello!";
c = 1223;

// 2.2. Creating custom types using type aliases
interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

// 2.3. Creating custom types with interfaces
interface Address {
  line1: string;
  line2: string;
  providence: string;
  region: string;
  postalCode: number;
}

// 2.4. Defining types using type aliases
type ContactName = string;

// 2.5. Defining enumerable types
// enum ContactStatus {
//   Active = "active",
//   Inactive = "inactive",
//   New = "new",
// }

type ContactStatus = "active" | "inactive" | "new";

// 2.6. Typing functions
function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

const original: Contact = { id: 123, name: "Homer Simpson" };
const copy = clone(original);

// 2.7. Defining a metatype using generics
function cloneTwo<T>(source: T): T {
  return Object.apply({}, source);
}

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = cloneTwo(dateRange);

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  birthDate: new Date("01-01-1980"),
  status: "active",
};

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    return contact.birthDate;
  }
}

// 3.1. Combining multiple types with union types
type ContactBirthDate = Date | number | string;

type AddressableContact = Contact & Address;

// 3.2. Keyof operator
type ContactFields = keyof Contact;

// const field: ContactFields = ""
function getValue<T, U extends keyof T>(source: T, propertyName: keyof U) {
  return source[propertyName];
}

const value = getValue({ min: 1, max:200 }, "");

// 3.3. Typef operator


// 3.4. Indexed access types

// 4.1. Extending and modifying existing types

// 4.2. Extracting metadata from existing types

// enum defaultPrice { Single=1000, Double=2000, Triple=3000 }
// enum cost { Red = defaultPrice.Single, Green=Blue, Blue = defaultPrice.Triple, White = defaultPrice.Triple }

// function fun(str: string):string {
//   return 42 + " " + str;
// }

// function fun(num: number): number {
//   return "hello" + num;
// }

function fun(contact:number, name?:string, defaultName:string="Usopp", ...restName:string[]) {
  alert("defaultName haas: " + defaultName)
}

fun(123123123, "Lufy", "zoro", "namefd", "sanji")