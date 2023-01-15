// beginning values
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = charLower.toLocaleUpperCase();
var charNumber = "1234567890"
var charSymbol = "!@#$%^&*()"
var charSelect = [];
var password = "";
var charJoin = "";
var passwordText = document.querySelector("#password");
var length = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//password generater to use later defined prompts
function generatePassword(charJoin) {
  
  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * charJoin.length);
    password += charJoin.substring(randomNumber, randomNumber +1);
    }

    //display password on site and copy to clipboard
    passwordText.value = password;
    navigator.clipboard.writeText(password);
    alert("Your password has been copied to your clipboard.");

//reset array, join, and password values to make more passwords
  charSelect = [];
  charJoin = "";
  password = "";
}

//Length 8-128
//Character choice
//One char type must be selected
//Password appears in box or alert
//Write password to the #password input
function writePassword() {
  length = prompt("Please type in password length. (Numerical value from 8-128.)");
  //checks to see if 'length' has a numeric value and stops function if not.
    if (isNaN(length))
    {
    alert("Please enter a number value (example: 15).")
    return null;
    } 
  //checks to make sure length is a number 8-128
    if (length < 8)
    {
    alert("Please choose a number equal to or greater than 8.");
    return null;
   }
    if (length > 128)
   {
   alert("Please choose a number equal to or less than 128.")
    return null;
   }
  //lowercase selector
  var selectLower = confirm("Do you want lowercase abc characters included in your password?");
   if (selectLower == true) {
    charSelect.push(charLower)
   }
  //uppercase selector
  var selectUpper = confirm("Do you want uppercase abc characters included in your password?");
   if (selectUpper == true) {
    charSelect.push(charUpper)
   }
  //number selector
  var selectNumber = confirm("Do you want numerical characters included in your password?");
   if (selectNumber == true) {
    charSelect.push(charNumber)
   } 
  //symbol selector
  var selectSymbol = confirm("Do you want symbols included in your password?");
   if (selectSymbol == true) {
    charSelect.push(charSymbol)
   }
  
  //if no character group is selected, function will stop with alert message.
  if (selectLower, selectUpper, selectNumber, selectSymbol === false)
  {
    alert("Please select a character group to generate password from.")
    return null;
  }

  //join array into a string of values, remove spaces
  charJoin = charSelect.join(" ");
  charJoin = charJoin.replace(/\s+/g, '');
  generatePassword(charJoin);
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
