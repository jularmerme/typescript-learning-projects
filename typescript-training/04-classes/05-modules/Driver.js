"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Martin", "Smith");
console.log("Hi ".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
