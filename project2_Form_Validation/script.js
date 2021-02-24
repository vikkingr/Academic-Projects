/**
 * By: Robert Veinberg-Vikking
 * Instructor: Tamer Arafa
 * Project 2
 * 2/9/2021
 */

function validateForm() {

    // Store all values of fields for validation.

    let userFName = document.getElementById("userFName").value;
    let userLName = document.getElementById("userLName").value;
    let userAddress = document.getElementById("userAddress").value;
    let userCity = document.getElementById("userCity").value;
    let userZipcode = document.getElementById("userZipcode").value;
    let userEmail = document.getElementById("userEmail").value;
    let userCardName = document.getElementById("userCardName").value;
    let userCardNumber = document.getElementById("userCardNumber").value;
    let userSecCode = document.getElementById("userSecCode").value;
    let userState = document.getElementById("userState").value;
    let userExpiryDate = document.getElementById("userExpiryDate").value;

    // Begin validation process, check return value of each validation function.

    if(!validateControl(userZipcode, "Zip", 5)) {
        return false;
    }

    if(!validateControl(userSecCode, "CVV2/CVC", 3)) {
        return false;
    }

    if(!validateCreditCard(userCardNumber)) {
        return false;
    }

    if(!validateEmail(userEmail)) {
        return false;
    }

    if(!validateDate(userExpiryDate)) {
        return false;
    }

    if(!validateState(userState)) {
        return false;
    }

    // At this point, the if statements have validated everything to be correct.

    // So, logically we must inform the user of a successful submission.
    alert("Payment Submitted!");

    return false;

}// end validateForm

function testLength(value, length) {

    if(value.length == length) {
        return true;
    }
    else {
        return false;
    }

}// end testLength

function testNumber(value) {

    if(isNaN(value)) {
        return false;
    } 
    else {
        return true;
    }

}// end testNumber

function validateControl(control, name, length) {

    // Boolean flag if argument is correct length
    let isCorrectLength = testLength(control, length);

    // Check for the Zip length
    if(!isCorrectLength && name == "Zip") {
        alert("The ZIPCODE field must be exactly FIVE digits long.");
        return false;
    }

    // Check for the CVV2/CVC length
    if(!isCorrectLength && name == "CVV2/CVC") {
        alert("The CVV2/CVC field must be THREE digits long.");
        return false;
    }

    // Boolean flag if argument is correct type
    let isCorrectType = testNumber(control);
    
    // Check for the Zip type
    if(!isCorrectType && name == "Zip") {
        alert("The ZIPCODE field must be a NUMBER.");
        return false;
    }

    // Check for the CVV2/CVC type
    if(!isCorrectType && name == "CVV2/CVC") {
        alert("The CVV2/CVC field must be a NUMBER");
        return false;
    }

    // Check if both tests passed for Zip
    if(isCorrectType && isCorrectLength && name == "Zip") {
        return true;
    }

    // Check if both tests passed for CVV2/CVC
    if(isCorrectType && isCorrectLength && name == "CVV2/CVC") {
        return true;
    }

}// end validateControl

function validateCreditCard(value) {

    let localCardNumber = value;

    // Remove any or repeated spaces from the argument using regular expression.
    localCardNumber = localCardNumber.replace(/\s/g, '');

    // Boolean flag if argument is a NUMBER
    let isCorrectType = testNumber(localCardNumber);

    // Test if the argument is a NUMBER
    if(!isCorrectType) {
        alert("Invalid Credit Card Number Format.");
        return false;
    }

    // Test if card is valid type
    if(!(localCardNumber[0] == 3) && !(localCardNumber[0] == 4) && !(localCardNumber[0] == 5) && !(localCardNumber[0] == 6)) {
        alert("Unknown Credit Card Type.");
        return false;
    }

    // Test if card is correct length
    if(!(localCardNumber[0] == 3 && localCardNumber.length == 15) && !(localCardNumber[0] == 4 && localCardNumber.length == 16) && !(localCardNumber[0] == 5 && localCardNumber.length == 16) && !(localCardNumber[0] == 6 && localCardNumber.length == 16)) {
        alert("Invalid Credit Card Length.");
        return false;
    }

    // If all the tests have passed, we can finally return true.
    return true;

}// end validateCreditCard

function validateDate(value) {

    // Create local copy of argument
    let localDate = new Date(value);

    // Create a new date object to compare the current date
    let currentDate = new Date();

    // Check if localDate is greater than the currentDate
    if(localDate.getTime() <= currentDate.getTime()) {
        alert("Invalid Expiry Date");
        return false;
    }

    return true;

}// end validateDate

function validateEmail(value) {

    // Create local copy of argument
    let localEmail = value;

    // Create a regular expression to match the email.
    let myRegEx = /^([a-z]*[0-9]*)+@([a-z]*[0-9]*)+\.[a-z]+$/i;

    // Let's validate it using the test function.
    if(!myRegEx.test(localEmail)) {
        alert("Invalid Email Address Format.");
        return false;
    }

    // The errors have been validated, we can return true.
    return true;

}// end validateEmail

function validateState(value) {

    // Create local copy of parameter
    let localState = value;

    // Check if localState is the default value
    if(localState == "defaultSelectState") {
        alert("Select A State From The State Field")
        return false;
    }

    // Test has passed, the user has selected something from the values
    return true;

}// end validateState