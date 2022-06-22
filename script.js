const validateOperand = (num1, op, num2) => {
    console.log("entered here");
    let sol;
    switch(op) {
        case "+":
            sol = num1 + num2;
            break;
        case "-":
            sol = num1 - num2;
            break;
        case "*":
            sol = num1 * num2;
            break;
        case "/":
            sol = num1 / num2;
            break;
        case "%":
            sol = num1 % num2;
            break;
        default:
            sol =  "invalid";
    }
    return sol;
}
const start = () => {
    alert("This is a JavaScript basic Calculator");
    num1 = parseInt(prompt("Input the first number"));
    operator = prompt("Input the basic operator(it should be one of these): +, -, *, /, %");
    num2 = parseInt(prompt("Input the second number"));
    console.log(num1, operator, num2);
    if(typeof num1 == 'number' && typeof num2 == 'number') {
        console.log("pass1");
        let sol = validateOperand(num1, operator, num2);
        if(sol == "invalid") {
            alert("invalid operation");
            start();
        } else {
            alert("answer= " + sol);
        }
    }
}
start();
