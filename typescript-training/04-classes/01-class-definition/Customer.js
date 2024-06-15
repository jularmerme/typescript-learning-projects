var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Martin", "Nilson");
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
