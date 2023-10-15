import React, { useState, ChangeEvent } from 'react';

interface Inputs {
  loanAmount: number; 
  annualInterestRate: number; 
  loanTerm: number; 
}

const MortgageCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({ 
    loanAmount: 0, 
    annualInterestRate: 0, 
    loanTerm: 0 
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: parseFloat(value) });
  };

  const calculateMortgage = () : number | string => {
    const { loanAmount, annualInterestRate, loanTerm } = inputs;
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    if(loanAmount === 0 || annualInterestRate === 0 || loanTerm === 0) {
      return 'Please fill out the fields correctly';
    } 

    const numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments);
    const denominator = Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1;

    return (loanAmount * (numerator / denominator)).toFixed(2); 
  };

  return (
    <div>
      <h1> Mortgage Calculator </h1>
      <input 
        type="number" 
        name="loanAmount" 
        onChange={handleInputChange} 
        placeholder="Principal Amount" 
      />
      <input 
        type="number" 
        name="annualInterestRate" 
        onChange={handleInputChange} 
        placeholder="Yearly Interest Rate (%)" 
      />
      <input 
        type="number" 
        name="loanTerm" 
        onChange={handleInputChange} 
        placeholder="Loan Term (years)" 
      />

      <p> Monthly Payment: {calculateMortgage()} </p>
    </div>
  );
};

export default MortgageCalculator;
