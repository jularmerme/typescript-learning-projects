let reviews: number[] = [5, 4, 2, 7.5, 9];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

let average: number = total / reviews.length;

console.log("Review average: " + average);
