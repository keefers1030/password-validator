/* eslint-disable indent */
function passwordNumber () {
    let numerals = '0123456789'

    for (let i = 0; i < password.length; i++) {
        if (numerals.indexOf(password[i]) >= 0) {
            return true
        }
        else return false
    }
}


let password = 'hey'

console.log(passwordNumber(password))