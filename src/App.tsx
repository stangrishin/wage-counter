import { useState, useEffect, useRef, useCallback } from 'react';
import './index.css';
import { currencies, months, periods } from './types';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';

const currentMonthValue = new Date()
  .toLocaleString('default', { month: 'long' })
  .toLowerCase();
const initialMonth =
  months.find((m) => m.value === currentMonthValue) || months[0];

interface Item {
  id: string;
  name: string;
  price: number;
  accumulated: number;
}

function App() {
  const [userInputNumber, setHourlyRate] = useState<number | string>('');
  const [period, setPeriod] = useState(periods[0].value);
  const [amount, setAmount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currency, setCurrency] = useState(currencies[0].symbol);
  const [month, setMonth] = useState<string>(initialMonth.value);
  const [customHours, setCustomHours] = useState<number | string>(
    initialMonth.hours
  );
  const [items, setItems] = useState<Item[]>([]);

  const startTimeRef = useRef<Date | null>(null);

  useEffect(() => {
    const selectedMonth = months.find((m) => m.value === month);
    if (selectedMonth) {
      setCustomHours(selectedMonth.hours);
    }
  }, [month]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      if (!startTimeRef.current) {
        startTimeRef.current = new Date();
      }

      timer = setInterval(() => {
        if (startTimeRef.current) {
          const now = new Date();
          const elapsedTime =
            (now.getTime() - startTimeRef.current.getTime()) / 1000;

          const amountInputByUser =
            typeof userInputNumber === 'number' ? userInputNumber : 0;

          let numberOfSecondsInPeriod = 0;
          if (period === 'hour') numberOfSecondsInPeriod = 60 * 60;
          if (period === 'day') numberOfSecondsInPeriod = 60 * 60 * 8;
          if (period === 'week') numberOfSecondsInPeriod = 60 * 60 * 8 * 5;
          if (period === 'month')
            numberOfSecondsInPeriod =
              typeof customHours === 'number' ? customHours * 3600 : 0;

          const ratePerSecond = amountInputByUser / numberOfSecondsInPeriod;

          setAmount(elapsedTime * ratePerSecond);
        }
      }, 1000);
    } else {
      startTimeRef.current = null;
      if (timer) clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, userInputNumber, period, customHours]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setAmount(0);
    setIsRunning(false);
    startTimeRef.current = null;
  };

  const handleAddItem = (name: string, price: number) => {
    const newItem: Item = {
      id: `item-${items.length + 1}`,
      name,
      price,
      accumulated: 0,
    };

    setItems([...items, newItem]);
  };

  const handleRemoveItem = (itemId: string) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const handleEditItem = (id: string, name: string, price: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, name, price } : item))
    );
  };

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const draggedItem = items[dragIndex];
      const newItems = [...items];
      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, draggedItem);
      setItems(newItems);
    },
    [items]
  );

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4'>
      <h1 className='text-4xl font-bold mb-8'>Wage Counter Motivation</h1>
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
      <AddItemForm onAddItem={handleAddItem} />
      <ItemList
        items={items}
        progress={amount}
        moveItem={moveItem}
        handleRemoveItem={handleRemoveItem}
        handleEditItem={handleEditItem}
      />
    </div>
  );
}

export default App;
