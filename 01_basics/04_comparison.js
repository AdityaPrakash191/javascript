// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); false
// console.log(null == 0);false
// console.log(null >= 0);true
// the reason is that an equity check == and comparison < <= >= > works differently.
// comparison converts null to a number, treating it as 0
// that's why null >= 0 is true and null > 0 is false


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);