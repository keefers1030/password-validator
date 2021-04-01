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
    const numerals = '0123456789'

    for (let i = 0; i < password.length; i++) {
        if (numerals.indexOf(password[i]) >= 0) {
            return true
        }
    }

    // password check for character
    
}

let password = 'HeyKittyGirl5!'

console.log(validatePassword(password))

module.exports = validatePassword
