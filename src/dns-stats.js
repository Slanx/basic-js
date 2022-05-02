const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let obj = {};

    domains.forEach((item) => {
        let pos = item.lastIndexOf(".");
        let newItem = item.slice(pos, item.length);
        if (obj[newItem]) {
            obj[newItem]++;
        } else {
            obj[newItem] = 1;
        }

        while (pos !== -1) {
            let prevPos = pos;
            pos = item.lastIndexOf(".", pos - 1);
            if (pos !== -1) {
                newItem += item.slice(pos, prevPos);
            } else {
                newItem += "." + item.slice(0, prevPos);
            }
            console.log(`item:${item},newItem${newItem}`);
            if (obj[newItem]) {
                obj[newItem]++;
            } else {
                obj[newItem] = 1;
            }
        }
    });
    return obj;
}

module.exports = {
    getDNSStats,
};
