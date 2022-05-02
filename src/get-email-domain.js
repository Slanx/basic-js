const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let pos = email.indexOf("@");
    let newEmail = email.slice(pos + 1);
    email = newEmail;

    while (pos !== -1) {
        pos = newEmail.indexOf("@");
        newEmail = email.slice(pos + 1);
        email = newEmail;
    }
    return email;
}

module.exports = {
    getEmailDomain,
};
