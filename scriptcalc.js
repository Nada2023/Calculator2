//task1
let resultElement = document.getElementById('ans');
currentInput=" "
let number1 = 0;
let number2 = 0;
let operations = "";

function EnterNumber(char) {

    if(operations == ""){
            number1 = char;
            }
            else{
                number2 = char;
            }

    resultElement.value += char;
   

}
function EnterOperator(operator){
    
        operations = operator;

        resultElement.value += operator;
        

}


  function EnterClear() {
    currentInput = '';
    resultElement.value = '';
}
function EnterEqual(){

  
    if(operations == "+"){
       resultElement.value= Number(number1) + Number(number2);
    }else if (operations == "-"){
       resultElement.value= number1 - number2;
    }else if (operations == "*"){
       resultElement.value= number1 * number2;
    }else if (operations == "/"){
       resultElement.value= number1 / number2;
        }
}

