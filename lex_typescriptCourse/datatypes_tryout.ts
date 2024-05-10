let productId: number = 1045; // Declaring a numeric variable
let productDescription: string = "16GB, Gold"; // Declaring a string variable
let productName: string = "Samsung Galaxy J7";
let productAvailable: boolean = true; // Declaring a boolean variable

// Declaring variables using const
const discountPercentage: number = 15;

enum MobilePrice {
  Black = 25000,
  Gold = 28000,
  White = 30000,
}

let manufacturers: any[] = [
  { id: "Samsung", checked: false },
  { id: "Motorola", checked: false },
  { id: "Apple", checked: false },
  { id: "Sony", checked: false },
];

// function to calculate final amount
function calculateAmount(price: number): number {
  let discount: number;
  let totalAmount: number;
  if (price === MobilePrice.Gold) {
    discount = 5;
  } else if (price === MobilePrice.White) {
    discount = 8;
  } else {
    discount = 10;
  }
  totalAmount = (price * discount) / 100;
  return totalAmount;
}

console.log("The type of productId is " + typeof productId);
console.log("The type of productAvailable is " + typeof productAvailable);
console.log("The type of productName is " + typeof productName);
console.log("Discount percentage is: " + discountPercentage);

// Lines to populate the Actual and Final price of Black color Mobile
console.log("Actual price of the Mobile is " + MobilePrice.Black);
console.log(
  "The final price after discount is " + calculateAmount(MobilePrice.Black)
);

// Logic to populate the above declared array's is value
for (let i = 0; i < manufacturers.length; i++) {
  console.log(manufacturers[i].id);
}
