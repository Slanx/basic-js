const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
    if (!(arr instanceof Array)) {
        throw Error("'arr' parameter must be an instance of the Array!");
    }

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "--discard-next":
                if (i !== arr.length - 1) i++;
                break;
            case "--discard-prev":
                if (i !== 0 && newArr.length === i) {
                    newArr.pop();
                }
                break;
            case "--double-next":
                if (i !== arr.length - 1) {
                    newArr.push(arr[i + 1]);
                }
                break;
            case "--double-prev":
                if (i !== 0 && newArr.length === i) newArr.push(arr[i - 1]);
                break;
            default:
                newArr.push(arr[i]);
        }
        console.log(`i:${i} newArr ${newArr}`);
    }
    return newArr;
}

module.exports = {
    transform,
};
