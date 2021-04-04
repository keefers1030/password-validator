/* eslint-disable no-console */
/* eslint-disable indent */

let validatePassword = () => {
    if ((passwordLength) && (passwordUpperCase) && (passwordLowerCase) && (passwordNumber) && (passwordChar)) {
        return true
    }
    else return false
}

let passwordLength = () => {
    return (password.length >= 8)
}


let passwordUpperCase = () => {
    return (password !== password.toUpperCase())
}

let passwordLowerCase = () => {
    return (password !== password.toLowerCase())
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
    let chars = '"~`!#$%^&*+=-[]\\\';,/{}|\":<>?"'

    for (let i = 0; i < password.length; i++) {
        if (chars.indexOf(password[i]) <= 0) {
            return true
        }
        else return false
    }
}

module.exports = validatePassword
