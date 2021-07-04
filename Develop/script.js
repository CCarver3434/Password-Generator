// Assignment code here
// User input variables:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Next, Password Variable Values:
// Create an array of each type of characters
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function that generates password
function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your password to be? You may choose between 8 and 128 characters."));
  if (!enter) {
    alert("This needs a value!")
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128 characters."));

  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain UPPERCASE letters?");
    confirmLowercase = confirm("Will this contain lowercase letters?");
  };

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
  }
  // Determine Choices from user input
  // 4 Positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number, alpha, alpha2);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
        choices = character;
  }
  else if (confirmNumber) {
        choices = number;
  }
  else if (confirmLowercase) {
        choices = alpha;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
