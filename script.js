let operand = prompt("Select an operator: ")
let num1 = parseInt(prompt("Input the first number: "))
let num2 = parseInt(prompt("Input the second number: "))

if(operand == "+"){
    console.log(num1 + num2)
}else if(operand == "-"){
    console.log(num1 - num2)
}else if(operand == "*"){
    console.log(num1 * num2)
}else if(operand == "/"){
    console.log(num1 / num2)
}



// when you load this application please open the console by right 
// clicking on an empty space in the browser and selecting inspect then select the console tab