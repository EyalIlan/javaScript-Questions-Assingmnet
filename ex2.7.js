

// move to switch case

const BasicMath = (action,num1,num2) =>{

    if(action === '+'){
        return num1 + num2
    }
    if(action === '-'){
        return num1 - num2
    }
    if(action === '*'){
        return num1 * num2
    }
    if(action === '/'){
        return num1 / num2
    }
}

console.log( BasicMath('*',4,5))