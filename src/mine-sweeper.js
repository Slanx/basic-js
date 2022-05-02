const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let newMatrix = [];
    let counter = 0;
    let row = [];
    for (let i = 0; i < matrix.length; i++) {
        row = [];

        for (let j = 0; j < matrix[i].length; j++) {
            for (let k = -1; k < 2; k++) {
                try {
                    if (true === matrix[i + k][j] && i + k !== i) {
                        counter++;
                        console.log(`1elem${i}${j} k ${k} count${counter}`);
                    }
                } catch {}
                try {
                    if (true === matrix[i][j + k] && j + k !== j) {
                        counter++;
                        console.log(`2elem${i}${j} k ${k} count${counter}`);
                    }
                } catch {}
                try {
                    if (true === matrix[i + k][j + k] && k !== 0) {
                        counter++;
                        console.log(`3elem${i}${j} k ${k} count${counter}`);
                    }
                } catch {}
                try {
                    if (true === matrix[i + k][j - k] && k !== 0) {
                        counter++;
                        console.log(`4elem${i}${j} k ${k} count${counter}`);
                    }
                } catch {}
            }
            row.push(counter);

            counter = 0;
        }
        newMatrix.push(row);
    }
    return newMatrix;
}

module.exports = {
    minesweeper,
};
