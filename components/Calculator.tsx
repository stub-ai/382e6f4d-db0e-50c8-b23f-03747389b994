import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
      case '+':
        setResult((num1 + num2).toString());
        break;
      case '-':
        setResult((num1 - num2).toString());
        break;
      case '*':
        setResult((num1 * num2).toString());
        break;
      case '/':
        if (num2 !== 0) {
          setResult((num1 / num2).toString());
        } else {
          setResult('Error: Division by zero');
        }
        break;
      default:
        setResult('Error: Invalid operation');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2"
      />
      <div className="flex space-x-4">
        <button onClick={() => setOperator('+')} className="bg-blue-500 text-white rounded-md p-2">+</button>
        <button onClick={() => setOperator('-')} className="bg-blue-500 text-white rounded-md p-2">-</button>
        <button onClick={() => setOperator('*')} className="bg-blue-500 text-white rounded-md p-2">*</button>
        <button onClick={() => setOperator('/')} className="bg-blue-500 text-white rounded-md p-2">/</button>
      </div>
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2"
      />
      <button onClick={calculate} className="bg-green-500 text-white rounded-md p-2">Calculate</button>
      <div className="border-2 border-gray-300 rounded-md p-2">
        {result}
      </div>
    </div>
  );
};

export default Calculator;