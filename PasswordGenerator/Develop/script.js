var value;
var valueNumber;
var valueCharacter;
var valueUppercase;
var valueLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 


var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function generatePassword() {
    
    value = parseInt(prompt("Please choose between 8-128 charcters."));
    
    if (!value) {
        alert("Please input a value between 8-128");
    } else if (value < 8 || value > 128) {
        
        value = parseInt(prompt("Length must be between 8-128 characters."));

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

        choices = character.concat(number, alpha, alpha2);
    }
    
    else if (valueCharacter && valueNumber && valueUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (valueCharacter && valueNumber && valueLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (valueCharacter && valueLowercase && valueUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (valueNumber && valueLowercase && valueUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    
    else if (valueCharacter && valueNumber) {
        choices = character.concat(number);

    } else if (valueCharacter && valueLowercase) {
        choices = character.concat(alpha);

    } else if (valueCharacter && valueUppercase) {
        choices = character.concat(alpha2);
    }
    else if (valueLowercase && valueNumber) {
        choices = alpha.concat(number);

    } else if (valueLowercase && valueUppercase) {
        choices = alpha.concat(alpha2);

    } else if (valueNumber && valueUppercase) {
        choices = number.concat(alpha2);
    }
    
    else if (valueCharacter) {
        choices = character;
    }
    else if (valueNumber) {
        choices = number;
    }
    else if (valueLowercase) {
        choices = alpha;
    }
    
    else if (valueUppercase) {
        choices = space.concat(alpha2);
    };

  
    var password = [];

    
    for (var i = 0; i < value; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
