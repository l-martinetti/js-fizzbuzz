let message = "";

for (let i=1; i <= 100; i++) {
 if (!(i % 3) && !(i % 5)) {
    message += "Fizz Buzz";
 } else  if (!(i % 5)) {
  message += "Buzz";
} else  if (!(i % 3)) {
  message += "Fizz";
} else {
    message += i;
}
}
console.log(message);
