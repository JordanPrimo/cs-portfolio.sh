//This is the creation of the variables, and where the HTML and JS files get linked together to make the calculator.
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);
//This is the code to allow the calculator to do the math
function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
      if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
}
  if  (dropdown.value == "*"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
  }
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
      if  (dropdown.value == "%"){
        answer = parseInt(input1.value) % parseInt(input2.value);
        display.innerHTML = answer;
      }
        if  (dropdown.value == "="){
        answer = parseInt(input1.value) = parseInt(input2.value);
        display.innerHTML = answer;
        }    
}