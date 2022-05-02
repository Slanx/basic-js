const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = [];
    let resArr = [];
    for (let i = 0; i < `${n}`.length; i++) {
        let numberArr = [...`${n}`];
        numberArr.splice(i, 1);
        resArr.push(+numberArr.join(""));
    }
    resArr.sort((a, b) => b - a);
    return resArr[0];
}

module.exports = {
    deleteDigit,
};
