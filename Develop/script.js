// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
    var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    var upperCaseLetters = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
    var numb = '1234567890';
    var specialChars = '~!@#$%^&*()_+{}:?><;.,';
    var password = '';
    var choiceCheck = '';
  
// Password's length requirement
var passwordLength = prompt('Your password must cointain between 8 to 128 characteres.')

// Verify the password length meets the requirements of 8 - 128 characteres.
if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength)
  }

// This will check if the password contains 8 to 128 characteres. if not, it will
//print the message below

else {
    alert('Your password must have 8 to 128 characteres.')
    return '';
  }
  
  // Option of lower case letters inclusion in the password.
  var reqLowerCaseLetters = confirm('Include lower case letters?')
  
  // Option of upper case letters inclusion in the password.
  var reqUpperCaseLetters = confirm('Include upper case letters?')
  
  // Option of numbers inclusion in the password.
  var reqNumb = confirm('Include numbers in your password?')
  
  // Option of special characters inclusion in the password.
  var reqSpecialChars = confirm('Include special characters in your password?')
  
  // If or else statements 

if (reqLowerCaseLetters) {
    choiceCheck += lowerCaseLetters
  }
  
  // random selection of a letter from the upperCaseLetters array.
if (reqUpperCaseLetters) {
    choiceCheck += upperCaseLetters
  }
  
  // random selection of a number from the numb array.
if (reqNumb) {
    choiceCheck += numb
  }
  
  // random selection of a character from specialChars.
if (reqSpecialChars) {
    choiceCheck += specialChars
  }
  // Will cnacel and return an alert if no character types are selected.
if (
    !reqLowerCaseLetters && !reqUpperCaseLetters && !reqNumb && !reqSpecialChars
  ) {
    return alert('You must select at least one requirement!');
    
  }
  
for (var i = 0; i < passwordLength; i++) {
    
    // Random selection of characteres from choiceCheck.

    password +=choiceCheck[Math.floor(Math.random () * choiceCheck.length)];
  }
return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
