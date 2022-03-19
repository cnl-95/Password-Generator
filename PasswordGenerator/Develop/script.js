var value;
var valueNumber;
var valueCharacter;
var valueUppercase;
var valueLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 


var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

lettersUpper = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    pass = generatePassword();
    document.getElementById("password").placeholder = pass;
});


function generatePassword() {
    
    value = parseInt(prompt("Please choose between 8-128 charcters."));
    
    if (!value) {
        alert("Please input a value between 8-128");
    } else if (value < 7 || value > 129) {
        
        value = parseInt(prompt("Invalid response, please choose between 8-128 charcters."));

    } else {
        valueNumber = confirm("Would you like to include numbers?");
        valueCharacter = confirm("Would you like to include special characters?");
        valueUppercase = confirm("Would you like to include Uppercase letters?");
        valueLowercase = confirm("Would you like to include Lowercase letters?");
    };

    
    if (!valueCharacter && !valueNumber && !valueUppercase && !valueLowercase) {
        choices = alert("Criteria error, please choose between critiera.");

    }
    
    else if (valueCharacter && valueNumber && valueUppercase && valueLowercase) {

        choices = character.concat(number, letters, lettersUpper);
    }
    
    else if (valueCharacter && valueNumber && valueUppercase) {
        choices = character.concat(number, lettersUpper);
    }
    else if (valueCharacter && valueNumber && valueLowercase) {
        choices = character.concat(number, letters);
    }
    else if (valueCharacter && valueLowercase && valueUppercase) {
        choices = character.concat(letters, lettersUpper);
    }
    else if (valueNumber && valueLowercase && valueUppercase) {
        choices = number.concat(letters, lettersUpper);
    }
    
    else if (valueCharacter && valueNumber) {
        choices = character.concat(number);

    } else if (valueCharacter && valueLowercase) {
        choices = character.concat(letters);

    } else if (valueCharacter && valueUppercase) {
        choices = character.concat(lettersUpper);
    }
    else if (valueLowercase && valueNumber) {
        choices = letters.concat(number);

    } else if (valueLowercase && valueUppercase) {
        choices = letters.concat(lettersUpper);

    } else if (valueNumber && valueUppercase) {
        choices = number.concat(lettersUpper);
    }
    
    else if (valueCharacter) {
        choices = character;
    }
    else if (valueNumber) {
        choices = number;
    }
    else if (valueLowercase) {
        choices = letters;
    }
    
    else if (valueUppercase) {
        choices = space.concat(lettersUpper);
    };

  
    var password = [];

    
    for (var i = 0; i < value; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    var pass = password.join("");
    UserInput(pass);
    return pass;
}

function UserInput(pass) {
    document.getElementById("password").textContent = pass;

}
