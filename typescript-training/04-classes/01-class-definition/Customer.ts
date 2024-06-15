class Customer {
  private firstName: string;
  private lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

let myCustomer = new Customer("Martin", "Nilson");

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);
