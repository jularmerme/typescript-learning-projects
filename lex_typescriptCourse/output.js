console.log("Hello World from Typescript file");
var productName = "Mobile";
if (true) {
    var productId = "P1001";
    console.log(`Value of Product ID within if condition: ${productId}`);
}
console.log(`Value of Product ID outside if condition: ${productId}`);
const productStatus = true;
const prodArray = ["Refrigerator", "cooler", "Speakers"];
prodArray.push("microwave");
for (let item of prodArray) {
    console.log(item);
}
