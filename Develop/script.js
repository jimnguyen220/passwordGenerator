// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").onclick = function() {
  prompt("Please choose a password length between 8 and 128 characters.");
}

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
