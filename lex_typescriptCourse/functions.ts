function productDetails(
  prodId: number,
  prodStatus: boolean = false,
  prodName?: string,
  ...colors
): string {
  let details;
  if (!prodName) {
    enum prodList {
      Samsung = 1001,
      Apple,
      Redmi,
      Realme,
      Oneplus,
      Oppo,
      Motorola,
    }
    prodName = prodList[prodId];
  } else {
    if (prodStatus) {
      details = prodName + " is available in " + colors;
    } else {
      details = prodName + " is out of stock in " + colors;
    }
  }
  return details;
}

console.log(productDetails(1007, false, "Note 5", "Black", "Gold", "Red"));
