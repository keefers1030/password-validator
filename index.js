/* eslint-disable no-console */
/* eslint-disable indent */

let passwordLength = (password) => {
    if (password.length < 8) {
        return false
    }
    else return true
}

let passwordUpperCase = (password) => {
    if (password == password.toUpperCase()) {

        return false
    }
    else return true
}

let passwordLowerCase = (password) => {
    if (password == password.toLowerCase()) {

        return false
    }
    else return true
}

let passwordNumber = (password) => {
    let numerals = '0,1,2,3,4,5,6,7,8,9'
    let result = false

    for (let i = 0; i < password.length; i++) {
        if (numerals.indexOf(password[i]) >= 0) {
            result = true
        }
    }

    return result
}

let passwordChar = (password) => {
    let chars = '~`!#$%^&*+=-[];,/{}|:<>?'
    let result = false

    for (let i = 0; i < password.length; i++) {
        if (chars.indexOf(password[i]) >= 0) {

            result = true
        }
    }

    return result
}

let validatePassword = (password) => {
    return ((passwordLength(password)) && (passwordUpperCase(password)) && (passwordLowerCase(password)) && (passwordNumber(password)) && (passwordChar(password)))
}

module.exports = validatePassword
