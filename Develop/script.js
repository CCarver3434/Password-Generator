// Assignment code here
// User input variables:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Next, Password Variable Values:
// Create an array of each type of characters
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space if for the uppercase version
space = [];

var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
var alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

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
    choices = character.concat();
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
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };

  var password = [];
  // Random selection for all Variables
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});
// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}