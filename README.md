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


 