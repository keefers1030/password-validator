const validatePassword = () => {
    if (
        (password.toUpperCase() != password) &&
        (password.length >= 8)
        //&& (password == password.toUpperCase)
    )
        return true;
    else return false;
}

const password = 'KittyGirl'
console.log(validatePassword(password))

module.exports = validatePassword
