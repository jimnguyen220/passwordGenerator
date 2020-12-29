# passwordGenerator

For this assigment, we are tasked with using Javascript to generate a password.  The HTML and CSS pages were given and have already been created.  The password must meet the following criteria: 

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
Link to deployed website: https://jimnguyen220.github.io/passwordGenerator/

Link to github repository: https://github.com/jimnguyen220/passwordGenerator

--------
special thanks to bootcamp tutor - Michell Brito






Pseudocode: 
* Create list of arrays for each variable of lower case, upper case, numbers and special Characters

 * "When I click the button to generate a password --> prompts a series of password criteria"
 
    * addEventListener is already prefilled in to start  writePassword function when button is clicked

* Within writePassword function, create prompts for password criteria - generatePassword function is embedded in this function

* Create code for generatePassword
   * prompt user to select how many characters they would like to use, between 8 and 128.  If outside of those parameters, will get an alert telling them to select between 8 and 128 characters.

   * next series of questions will define if user selects to use lower case, upper case, numbers or special characters and push the array the user would like to include into a new variable defined as userCharacters.

   * wrote function to randomize selection within array and add result to randomPassword array.

   * return result of randomPassword as a result of generatePassword. 

   * writePassword function takes result of generatePassword and displays it within display area of index.html
 