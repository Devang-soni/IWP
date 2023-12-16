function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If divisible, the number is not prime
        }
    }

    return true; // If not divisible by any number, the number is prime
}

// Example usage:
const numberToCheck = 25;

if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} is a prime number.`);
} else {
    console.log(`${numberToCheck} is not a prime number.`);
}
