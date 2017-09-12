// Task 
// Given an integer, N, perform the following conditional actions:

// If N is odd, print Weird
// If N is even and in the inclusive range of 2 to 5, print Not Weird
// If N is even and in the inclusive range of 6 to 20, print Weird
// If N is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not N is weird.

// Input Format

// A single line containing a positive integer, .

// Constraints

// 1 <= N <= 100

// Output Format

// Print Weird if the number is weird; otherwise, print Not Weird.

function main() {
    var N = parseInt(readLine());
    if (N % 2 === 0) {
        if (2 <= N && N <= 5) {
            console.log('Not Weird');
        }
        else if (6 <= N && N <= 20) {
            console.log('Weird');
        }
        else if (N > 20) {
            console.log('Not Weird');
        }
        else {
            console.log('Not Weird');
        }
    } else {
            console.log('Weird');
    }

}
