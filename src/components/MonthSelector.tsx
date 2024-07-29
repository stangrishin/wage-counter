import React from 'react';
import { months } from '../types';

interface MonthSelectorProps {
  month: string;
  setMonth: (value: string) => void;
  customHours: number | string;
  setCustomHours: (value: number | string) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({
  month,
  setMonth,
  customHours,
  setCustomHours,
}) => {
  return (
    <div className='mb-4 flex items-center'>
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className='p-2 border rounded mr-2 w-1/2'
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
      <input
        type='number'
        placeholder='Working hours'
        value={customHours}
        onChange={(e) => setCustomHours(parseFloat(e.target.value))}
        className='p-2 border rounded w-1/2'
      />
    </div>
  );
};

export default MonthSelector;
