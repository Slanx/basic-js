const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    constructor(type = true) {
        this.type = type;
    }

    aligment(str, keyword) {
        let newKey = [];
        for (let i = 0, j = 0; newKey.length < str.length; i++, j++) {
            if (/[^a-zA-Z]/.test(str[j])) {
                console.log(str[j]);
                newKey.push(str[j]);
                i--;
                continue;
            }
            if (i === keyword.length) {
                i = 0;
            }
            newKey.push(keyword[i]);
        }
        return newKey.join("");
    }

    encrypt(str, keyword) {
        if (arguments.length != 2 || !str || !keyword) {
            throw Error("Incorrect arguments!");
        }
        let newKey = this.aligment(str, keyword).toUpperCase();
        str = str.toUpperCase();
        let res = [];
        for (let i = 0; i < str.length; i++) {
            if (/[^a-zA-Z]/.test(str[i])) {
                console.log(str[i]);
                res.push(str[i]);
                continue;
            }
            let firstPos = this.alphabet.indexOf(str[i]);
            let secondPos = this.alphabet.indexOf(newKey[i]);
            let resPos = (firstPos + secondPos) % this.alphabet.length;
            res.push(this.alphabet[resPos]);
        }
        if (!this.type) {
            res = res.reverse();
        }
        return res.join("");
    }
    decrypt(str, keyword) {
        if (arguments.length != 2 || !str || !keyword) {
            throw Error("Incorrect arguments!");
        }
        let newKey = this.aligment(str, keyword).toUpperCase();
        str = str.toUpperCase();
        let res = [];
        for (let i = 0; i < str.length; i++) {
            if (/[^a-zA-Z]/.test(str[i])) {
                console.log(str[i]);
                res.push(str[i]);
                continue;
            }
            let firstPos = this.alphabet.indexOf(str[i]);
            let secondPos = this.alphabet.indexOf(newKey[i]);
            let resPos = (firstPos - secondPos) % this.alphabet.length;
            resPos = resPos < 0 ? this.alphabet.length + resPos : resPos;
            console.log(resPos);
            res.push(this.alphabet[resPos]);
        }
        if (!this.type) {
            res = res.reverse();
        }
        return res.join("");
    }
}

module.exports = {
    VigenereCipheringMachine,
};
