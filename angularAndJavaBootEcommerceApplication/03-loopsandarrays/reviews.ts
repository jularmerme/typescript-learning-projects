let reviews: number[] = [2, 6, 4.6, 8, 9];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(`Review #${i}: ${reviews[i]}`);
  total += reviews[i];
}

let average: number = total / reviews.length;

console.log(`Reviews average: ${average}`);
