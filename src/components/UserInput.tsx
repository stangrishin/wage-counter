import React from 'react';
import { currencies, periods } from '../types';

interface UserInputProps {
  userInputNumber: number | string;
  setUserInputNumber: (value: number | string) => void;
  currency: string;
  setCurrency: (value: string) => void;
  period: string;
  setPeriod: (value: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({
  userInputNumber,
  setUserInputNumber,
  currency,
  setCurrency,
  period,
  setPeriod,
}) => {
  return (
    <>
      <input
        type='number'
        placeholder='Enter rate per period'
        value={userInputNumber}
        onChange={(e) => setUserInputNumber(parseFloat(e.target.value))}
        className='mb-4 p-2 border rounded w-full'
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className='mb-4 p-2 border rounded w-full'
      >
        {currencies.map((curr) => (
          <option key={curr.symbol} value={curr.symbol}>
            {curr.label}
          </option>
        ))}
      </select>
      <select
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className='mb-4 p-2 border rounded w-full'
      >
        {periods.map((period) => (
          <option key={period.value} value={period.value}>
            {period.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default UserInput;
