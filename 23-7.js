// simple calculator

function add(a, b){
    return a + b
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function calculator(a, b, operator){
    if(operator === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operator === 'substract'){
        const result = substract(a, b);
        return result;
    }
    else if(operator === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if(operator === 'divide'){
        const result = divide(a, b);
        return result;
    }
    else{
        return 'Invalid operator';
    }
}

const Calculation = calculator(10, 2, 'divide');
console.log(Calculation);