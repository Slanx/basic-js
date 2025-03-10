const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            let maxDepth = 1;
            let depth = 1;
            for (let k of arr) {
                depth += this.calculateDepth(k);
                if (maxDepth < depth) {
                    maxDepth = depth;
                }
                depth = 1;
            }

            return maxDepth;
        } else {
            return 0;
        }
    }
}

module.exports = {
    DepthCalculator,
};
