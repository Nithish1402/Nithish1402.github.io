const num = prompt(`enter a number`);
let check = 0;
const checkPrime = function (number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      check++;
    }
  }
  check == 0
    ? console.log(`Given ${num} is prime number`)
    : console.log(`Given ${number} is not a prime number`);
};

checkPrime(num);
