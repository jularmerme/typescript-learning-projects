var reviews = [2, 6, 4.6, 8, 9];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log("Review #".concat(i, ": ").concat(reviews[i]));
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Reviews average: ".concat(average));
