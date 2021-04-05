/* eslint-disable no-console */
/* eslint-disable indent */

let validatePassword = () => {
    if ((passwordLength) && (passwordUpperCase) && (passwordLowerCase) && (passwordNumber) && (passwordChar)) {
        return true
    }

    else if (passwordLength === false) {
        return false
    }
}

let passwordLength = () => {
    if (password.length < 8) {
        return false
    }
    else return true
}

let passwordUpperCase = () => {
    if (password == password.toUpperCase()) {
        return false
    }
    else return true
}

let passwordLowerCase = () => {
    if (password == password.toLowerCase()) {
        return false
    }
    else return true
}

let passwordNumber = () => {
    let numerals = '0,1,2,3,4,5,6,7,8,9'

    for (let i = 0; i < password.length; i++) {
        if (numerals.indexOf(password[i]) >= 0) {
            return true
        }
        else return false
    }
}

let passwordChar = () => {
    let chars = '"~`!#$%^&*+=-[]\\\';,/{}|":<>?"'

    for (let i = 0; i < password.length; i++) {
        if (chars.indexOf(password[i]) >= 0) {
            return true
        }
        else return false
    }
}

module.exports = validatePassword
