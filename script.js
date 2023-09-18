// Function to perform a mathematical operation
function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          console.log("Division by zero is not allowed");
          return;
        }
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
  }
  
  // Example usage
  const num1 = 10;
  const num2 = 5;
  const operator = '+'; // Replace with the operator you want to test
  
  calculator(num1, num2, operator);
  