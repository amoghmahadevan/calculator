function add(a, b){
    return parseFloat((a + b).toFixed(10));
}
function subtract(a, b){
    return parseFloat((a - b).toFixed(10));
}
function multiply(a, b){
    return parseFloat((a * b).toFixed(10));
}
function divide(a, b){
    return parseFloat((a / b).toFixed(10));
}
function operation(a, operation, b){
    if(operation == "+")
        return add(a, b);
    else if(operation == "-")
        return subtract(a,b);
    else if(operation == "*")
        return multiply(a,b);
    else if(operation == "/")
        return divide(a,b);
}

let firstDefault = null;
let operationExist = false;
let secondDefault = null;
let sign = "";
let answer = null;
let firstdecimal = false;
let seconddecimal = false;
const outputscreen = document.querySelector(".screen");

const numbers = document.querySelectorAll(".number");
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', function(e){
        if(!operationExist){
            if(firstDefault == null){
                firstDefault = "";
            }
            firstDefault = firstDefault.toString();
            firstDefault += e.target.value;
            outputscreen.textContent = firstDefault;
            console.log(firstDefault);
        }
        else{
            if(secondDefault == null){
                secondDefault = "";
            }
            secondDefault = secondDefault.toString();
            secondDefault += e.target.value;
            outputscreen.textContent = firstDefault + " " + sign + " " + secondDefault;
            console.log(secondDefault);
        }
    });
}

function computeAnswer(operationsign){
    operationExist = false;
    console.log(operationsign);
    if(firstDefault == null){
        firstDefault = 0;
    }
    firstDefault = parseFloat(firstDefault);
    secondDefault = parseFloat(secondDefault);
    console.log(firstDefault + " " + sign + " " + secondDefault + " = ");
    answer = operation(firstDefault, sign, secondDefault);
    outputscreen.textContent = firstDefault + " " + sign + " " + secondDefault + " = " + answer;
    console.log(answer);
    firstDefault = answer;
    firstDefault = firstDefault.toString();
    secondDefault = null;
    seconddecimal = false;
}
const operations = document.querySelectorAll(".operation");
for(let i = 0; i < operations.length; i++){
    operations[i].addEventListener('click', function(e){
        if(e.target.value == "="){
            if(secondDefault != null && sign != ""){
                computeAnswer("=");
            }
        }
        else{
            if(secondDefault != null && sign != ""){
                computeAnswer("=");
            }
            operationExist = true;
            sign = e.target.value;
            seconddecimal = false;
            outputscreen.textContent = firstDefault + " " + sign + " ";
            console.log(sign);
        }
    });
}

function resetAll(){
    firstDefault = null;
    operationExist = false;
    secondDefault = null;
    sign = "";
    answer = null;
    firstdecimal = false;
    seconddecimal = false;
    outputscreen.textContent = "";
}
const reset = document.querySelector(".clear");
reset.addEventListener('click', resetAll);

function deletion(){
    if(!operationExist){
        if(firstDefault != null){
            firstDefault = firstDefault.substr(0, firstDefault.length - 1);
            if(!firstDefault.includes(".")){
                firstdecimal = false;
            }
            outputscreen.textContent = firstDefault;
            console.log(firstDefault);
        }
    }
    else{
        if(secondDefault != null){
            secondDefault = secondDefault.substr(0, secondDefault.length - 1);
            if(!secondDefault.includes(".")){
                seconddecimal = false;
            }
            outputscreen.textContent = firstDefault + " " + sign + " " + secondDefault;
            console.log(secondDefault);
        }
    }
}
const deleteNumber = document.querySelector(".delete");
deleteNumber.addEventListener('click', deletion);

const decimalPoint = document.querySelector(".decimal");
decimalPoint.addEventListener('click', function(e){
        if(!operationExist){
            if(!firstdecimal){
                firstdecimal = true;
                if(firstDefault ==null){
                    firstDefault = "";
                }
                firstDefault = firstDefault.toString();
                firstDefault = firstDefault + ".";
                outputscreen.textContent = firstDefault;
                console.log(firstDefault);
            }
        }
        else{
            if(!seconddecimal){
                seconddecimal = true;
                if(secondDefault == null){
                    secondDefault = "";
                }
                secondDefault = secondDefault.toString();
                secondDefault = secondDefault + ".";
                outputscreen.textContent = firstDefault + " " + sign + " " + secondDefault;
                console.log(secondDefault);
            }
        }
});


window.addEventListener("keydown", function(e){
    let key = e.key;
    console.log(key);
    if(parseInt(key) >= 0 && parseInt(key) <= 9){
       //Code for clicking a number button
       if(!operationExist){
            if(firstDefault == null){
                firstDefault = "";
            }
            firstDefault = firstDefault.toString();
            firstDefault += key;
            outputscreen.textContent = firstDefault;
            console.log(firstDefault);
        }
        else{
            if(secondDefault == null){
                secondDefault = "";
            }
            secondDefault = secondDefault.toString();
            secondDefault += key;
            outputscreen.textContent = firstDefault + " " + sign + " " + secondDefault;
            console.log(secondDefault);
         }
    }
    else if(key == "Escape"){
       //Code for clearing calculator
       firstDefault = null;
       operationExist = false;
       secondDefault = null;
       sign = "";
       answer = null;
       firstdecimal = false;
       seconddecimal = false;
       outputscreen.textContent = "";
    }
    else if(key == "Backspace"){
        //Code for delete
        if(!operationExist){
            if(firstDefault != null){
                firstDefault = firstDefault.substr(0, firstDefault.length - 1);
                if(!firstDefault.includes(".")){
                    firstdecimal = false;
                }
                outputscreen.textContent = firstDefault;
                console.log(firstDefault);
            }
        }
        else{
            if(secondDefault != null){
                secondDefault = secondDefault.substr(0, secondDefault.length - 1);
                if(!secondDefault.includes(".")){
                    seconddecimal = false;
                }
                outputscreen.textContent = firstDefault + " " + sign + " " + secondDefault;
                console.log(secondDefault);
            }
        }
    }
    else if(key == "+" || key == "-" || key == "*" || key == "/" || key == "=" || key == "Enter"){
        //Code for operations
        if(key == "=" || key == "Enter"){
            if(secondDefault != null && sign != ""){
                computeAnswer("=");
            }
        }
        else{
            if(secondDefault != null && sign != ""){
                computeAnswer("=");
            }
            operationExist = true;
            sign = key;
            seconddecimal = false;
            outputscreen.textContent = firstDefault + " " + sign + " ";
            console.log(sign);
        }
    }
    else if(key == "."){
        //Code for decimal
        if(!operationExist){
            if(!firstdecimal){
                firstdecimal = true;
                if(firstDefault ==null){
                    firstDefault = "";
                }
                firstDefault = firstDefault.toString();
                firstDefault = firstDefault + ".";
                outputscreen.textContent = firstDefault;
                console.log(firstDefault);
            }
        }
        else{
            if(!seconddecimal){
                seconddecimal = true;
                if(secondDefault == null){
                    secondDefault = "";
                }
                secondDefault = secondDefault.toString();
                secondDefault = secondDefault + ".";
                outputscreen.textContent = firstDefault + " " + sign + " " + secondDefault;
                console.log(secondDefault);
            }
        }
    }
});