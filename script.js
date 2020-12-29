// Assignment Code 
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeral = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];

var userCharacters = [];

var randomPassword = "";

//need to create a function for generatePassword

function generatePassword () {
    var numberOfCharacters = prompt("Please choose a number between 8 and 128. This number represents the length of your newly generated password.");

    if (numberOfCharacters > 7 && numberOfCharacters < 129) {
      var useLowerCase = confirm("Do you want to include lower case?")
      var useUpperCase = confirm("Do you want to include upper case?")
      var useNumber = confirm("Do you want to include numbers?")
      var useSpecialCharacter = confirm("Do you want to include special characters?")


      if (useLowerCase) {
        userCharacters.push(...lowerCase);
      }

      if (useUpperCase) {
        userCharacters.push(...upperCase);
      }

      if (useNumber) {
        userCharacters.push(...numeral);
      }

      if (useSpecialCharacter) {
        userCharacters.push(...specialCharacter);
      }

      for (var i = 0; i < numberOfCharacters; i++) {
       var randomIndex = Math.floor(Math.random() * userCharacters.length); 
       
       randomPassword = randomPassword + userCharacters[randomIndex];
      }

    }

    else {
      alert("Please use between 8 and 128 characters")
    }

    return randomPassword
  }

  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
