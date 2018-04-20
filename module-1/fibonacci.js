'use strict';

/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number}
 * @throws {Error} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    return n <= 0 ? 0 : n === 1 ? n : fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(39));
module.exports = fibonacci;