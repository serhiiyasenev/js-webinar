'use strict';

/**
 * The function determines the greatest common divisor or
 * the given two numbers.
 *
 * @param {number} a (a > 0)
 * @param {number} b (b > 0)
 * @returns {number} GCD or 0 if any arguments are not proper
 */
function euclidean(a, b) {
    let gcd;
    let res;

    if(a<0 || b<0){
        gcd = 0;
    } else {
        while (b != 0) {
            res = a % b;
            a = b;
            b = res;
        }
        gcd = a;
    }
    return gcd;
}
module.exports = euclidean;