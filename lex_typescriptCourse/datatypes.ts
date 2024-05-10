let productStatus: boolean = true;
let productId: number = 1007;
let productName: string = "Redmi Note 5 Pro";
let ScreenSize: any = 15.21;
ScreenSize = "5.99 inches";

let productDescription: string = `The ${productName} is a well equipped on-demand phone with 4GB RAM with a reasonable price.\n It is available with different color options`;

enum productPrice {
  black = 9000,
  gold = 12000,
  silver = 10000,
  red = black,
}

console.log(productPrice.black);
console.log(productPrice["red"]);

var productList: string[] = ["Samsung", "Apple", "Redmi", "Realme", "Oneplus"];

let myVar1: any = 20;
let myVar = 20;
