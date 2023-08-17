import { useEffect } from "react";

const calculateMonthlyPayment = () => {
  const monthlyInterestRate = interestRate / 1200;
    const numPayments = loanTerm * 12;
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numPayments) - 1;
    return loanAmount * (numerator / denominator); */
};

useEffect(() => {
    const monthlyPayment = calculateMonthlyPayment();
    dispatch(setMonthlyPayment(monthlyPayment));
  }, [loanAmount, interestRate, loanTerm, dispatch]);


function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

