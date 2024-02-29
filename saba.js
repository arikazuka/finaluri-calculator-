function startCalculator() {
    let firstNum = document.getElementById("number1").value;
    let secondNum = document.getElementById("number2").value;
    let opr = document.getElementById("operator").value;

    switch (opr) {
        case "+":
            let res = parseFloat(firstNum) + parseFloat(secondNum);
            document.getElementById("result").innerHTML = "Result: " + res;
            break;
        case "-":
            let res1 = parseFloat(firstNum) - parseFloat(secondNum);
            document.getElementById("result").innerHTML = "Result: " + res1;
            break;
        case "*":
            let res2 = parseFloat(firstNum) * parseFloat(secondNum);
            document.getElementById("result").innerHTML = "Result: " + res2;
            break;
        case "/":
            let res3 = parseFloat(firstNum) / parseFloat(secondNum);
            document.getElementById("result").innerHTML = "Result: " + res3;
            break;
        default:
            document.getElementById("result").innerHTML = "Invalid Operator";
    }
}