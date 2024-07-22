import { useState, useEffect } from 'react';
import './index.css';
import { currencies, months, periods } from './types';

const currentMonthValue = new Date()
  .toLocaleString('default', { month: 'long' })
  .toLowerCase();
const initialMonth =
  months.find((m) => m.value === currentMonthValue) || months[0];

function App() {
  const [userInputNumber, setHourlyRate] = useState<number | string>('');
  const [period, setPeriod] = useState(periods[0].value);
  const [amount, setAmount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(
    null
  );
  const [currency, setCurrency] = useState(currencies[0].symbol);
  const [month, setMonth] = useState<string>(initialMonth.value);
  const [customHours, setCustomHours] = useState<number | string>(
    initialMonth.hours
  );

  useEffect(() => {
    const selectedMonth = months.find((m) => m.value === month);
    if (selectedMonth) {
      setCustomHours(selectedMonth.hours);
    }
  }, [month]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        //ввели число
        const amountInputByUser =
          typeof userInputNumber === 'number' ? userInputNumber : 0;

        //определяем количество секунд в выбранный пользователем промежуток времени
        let numberOfSecondsInPeriod = 0;

        if (period === 'hour') numberOfSecondsInPeriod = 60 * 60; // 3 600
        if (period === 'day') numberOfSecondsInPeriod = 60 * 60 * 8; // 28 800
        if (period === 'week') numberOfSecondsInPeriod = 60 * 60 * 8 * 5; // 144 000
        if (period === 'month')
          numberOfSecondsInPeriod =
            typeof customHours === 'number' ? customHours * 3600 : 0; // 576 000

        const ratePerSecond = amountInputByUser / numberOfSecondsInPeriod;

        setAmount((prevAmount) => prevAmount + ratePerSecond);
      }, 1000);
      setTimer(interval);
    } else if (timer) {
      clearInterval(timer);
      setTimer(null); // Ensure timer is null after clearing
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isRunning, userInputNumber, period, customHours]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setAmount(0);
    setIsRunning(false);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4'>
      <h1 className='text-4xl font-bold mb-8'>Exotic Wage Counter</h1>
      <div className='bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md'>
        <input
          type='number'
          placeholder='Enter rate per period'
          value={userInputNumber}
          onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
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
        <div className='flex items-center justify-between'>
          <button
            onClick={handleStartPause}
            className='bg-blue-500 text-white p-2 rounded w-1/2 mr-2'
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={handleReset}
            className='bg-red-500 text-white p-2 rounded w-1/2'
          >
            Reset
          </button>
        </div>
      </div>
      <div className='mt-8 text-2xl'>
        <span>{amount.toFixed(2)}</span> <span>{currency}</span>
      </div>
    </div>
  );
}

export default App;
