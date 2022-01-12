 //Create a regular expression to validate if the given input is valid Indian mobile number or not


 const number = '+919876543210';

function validateMobile(number) {
    let regEx = /^(\+91|0)?( )?(\d{10})$/
    return regEx.test(number)
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)

// testing a regex if it's true of false


