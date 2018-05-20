'use strict';
const ALLOWED_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789';
/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

 function toCamelCase(toConvert){
        if (typeof toConvert === 'string') {
                    const words = toConvert.trim().split(' ').filter(word => word.length > 0);
                    const ucWords = words.map(word => {
                        word = word.toLowerCase().split('').filter(char => {
                            return ALLOWED_CHARACTERS.indexOf(char) !== -1;
                        }).join('');
                        if (word.length > 0) {
                            return word[0].toUpperCase() + word.substring(1);
                        }
                        return '';
                    });
                    return ucWords.join('');
        } 
        return '';
 }

 module.exports = toCamelCase;