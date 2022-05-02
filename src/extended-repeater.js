const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes, separator = "+", addition, additionRepeatTimes, additionSeparator = "|" }) {
    let arr = [];
    let additionCont = [];
    addition = `${addition}`;
    if (addition !== "undefined") {
        if (additionRepeatTimes) {
            for (let i = 0; i < additionRepeatTimes; i++) {
                additionCont.push(`${addition}`);
            }
        } else {
            additionCont.push(`${addition}`);
        }
    }
    if (repeatTimes) {
        for (let i = 0; i < repeatTimes; i++) {
            arr.push(str + additionCont.join(additionSeparator));
        }
    } else {
        arr.push(str + additionCont.join(additionSeparator));
    }

    return arr.join(separator);
}

module.exports = {
    repeater,
};
