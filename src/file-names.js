const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    counter = 0;
    names.forEach((item, i) => {
        if (names.lastIndexOf(item, i - 1) != -1 && i != 0) {
            counter++;
        }
        if (names.lastIndexOf(`${item}(${counter})`, i - 1) != -1) {
            counter++;
        }
        counter !== 0 ? names.splice(i, 1, `${item}(${counter})`) : names.splice(i, 1, `${item}`);
        counter = 0;
    });
    return names;
}

module.exports = {
    renameFiles,
};
