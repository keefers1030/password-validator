/* eslint-disable no-console */
/* eslint-disable indent */

const validatePassword = () => {
    // password length
    if (password.length <= 8) {
        return false
    }

    // password check for uppercase
    if (password === password.toUpperCase()) {
        return false
    }

    // password check for lowercase
    if (password === password.toLowerCase()) {
        return false
    }

    // password check for number
    for (var i = 0; i < password.length; i++) {
        if (i !== Number) {
            return false
        }
    }

    // password check for character
    for (let i = 0; i <= password.length; i++) {
        if (password.indexOf(password.charAt(i)) !== -1) {
            return false
        }
    }
}

let password = 'HeyKittyGirl5!'

console.log(validatePassword(password))

module.exports = validatePassword
