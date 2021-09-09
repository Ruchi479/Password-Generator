// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Creating Array of Numbers, Special characters, LowerCase & Upper Case Characters
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^","&", "*", "(", ")", "-", "=", "_", "+", "`", "[", "]", "{", "}", ";", ":", "<", ">", ",",".", "'"];
var upperCaseCharacters= ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseCharacters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//making function named generatePassword
function generatePassword() {
  //when User clicks on generate Password, options will be available for Users.
  var noOfCharacter = prompt("How many number of character, Do you want in your Passcode? Choose between 8 and 128 ?");

  if(noOfCharacter < 8 || noOfCharacter > 128) {
    alert("Incorrect input")
    return;
  }

  //using if conditions
  var numbers = confirm("Do you want to include numbers in your passcode?");
  var upperCase = confirm("Do you want to include Upper Case Letters in your passcode?");
  var lowerCase = confirm("Do you want to include Lower Case Letters in your passcode?");
  var specialChar = confirm("Do you want to include Special Characters in your passcode?");

  //Making empty array to store the data
  var resultArray = [];

  //function generatePassword
  if(numbers){
    resultArray =resultArray.concat(numericArray);
  }
  if(upperCase){
    resultArray=resultArray.concat(upperCaseCharacters);
  }
  if(lowerCase){
    resultArray=resultArray.concat(lowerCaseCharacters);
  }
  if(specialChar){
    resultArray=resultArray.concat(specialCharacters);
  }

  var newPw = [];

  // iterate through the resultArray noOfCharacter times
  // select a random character each time 
  // append the random char to the newPw

  for(var i=0; i<=noOfCharacter; i++){
    var randNo= Math.floor(Math.random() * resultArray.length);
    newPw.push(resultArray[randNo])
  }

  return newPw.join("")
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
