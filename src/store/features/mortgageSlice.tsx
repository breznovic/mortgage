import { createSlice } from "@reduxjs/toolkit";

type MortgageType = {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  monthlyPayment: number;
  costOfRealEstate: number;
  firstPayment: number
};

const initialState: MortgageType = {
  loanAmount: 0,
  interestRate: 0,
  loanTerm: 0,
  monthlyPayment: 0,
  costOfRealEstate: 0,
  firstPayment: 0
};

export const mortgageSlice = createSlice({
  name: "mortgage",
  initialState,
  reducers: {},
});

export default mortgageSlice.reducer;
