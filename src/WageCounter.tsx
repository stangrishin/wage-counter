import React, { useState, useEffect, useRef, useCallback } from 'react';
import UserInput from './components/UserInput';
import MonthSelector from './components/MonthSelector';
import ControlButtons from './components/ControlButtons';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import { saveUserData, getUserData } from './utils/firestore';
import { useAuth } from './hooks/useAuth';
import { currencies, months, periods } from './types';

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

const WageCounter: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [userInputNumber, setUserInputNumber] = useState<number | string>('');
  const [period, setPeriod] = useState(periods[0].value);
  const [amount, setAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currency, setCurrency] = useState(currencies[0].symbol);
  const [month, setMonth] = useState<string>(initialMonth.value);
  const [customHours, setCustomHours] = useState<number | string>(
    initialMonth.hours
  );
  const [items, setItems] = useState<Item[]>([]);
  const [dataFetched, setDataFetched] = useState<boolean>(false);

  const startTimeRef = useRef<Date | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        const data = await getUserData(currentUser);
        if (data) {
          setUserInputNumber(data.userInputNumber);
          setItems(data.items);
          setAmount(data.amount);
          setTotalAmount(data.totalAmount);
          setCurrency(data.currency);
          setPeriod(data.period);
          setDataFetched(true); // Set dataFetched to true after fetching data
        }
      }
    };
    fetchData();
  }, [currentUser]);

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

          setAmount((prevAmount) => prevAmount + ratePerSecond);
          setTotalAmount((prevTotal) => prevTotal + ratePerSecond);
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

  useEffect(() => {
    if (currentUser && dataFetched) {
      saveUserData(currentUser, {
        userInputNumber: Number(userInputNumber),
        items,
        amount,
        currency,
        period,
        totalAmount,
      }).catch((error) => console.error('Error saving user data:', error));
    }
  }, [
    currentUser,
    userInputNumber,
    dataFetched,
    items,
    amount,
    currency,
    period,
    totalAmount,
  ]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setAmount(0);
    setTotalAmount((prevAmount) => prevAmount - amount);
    setIsRunning(false);
    startTimeRef.current = null;
  };

  const handleStopForToday = () => {
    setAmount(0);
    setIsRunning(false);
    startTimeRef.current = null;
  };

  const handleResetTotal = () => {
    setTotalAmount(0);
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
      <button
        onClick={logout}
        className='bg-red-500 text-white p-2 rounded mb-8'
      >
        Logout
      </button>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-black'>
        <UserInput
          userInputNumber={userInputNumber}
          setUserInputNumber={setUserInputNumber}
          currency={currency}
          setCurrency={setCurrency}
          period={period}
          setPeriod={setPeriod}
        />
        <MonthSelector
          month={month}
          setMonth={setMonth}
          customHours={customHours}
          setCustomHours={setCustomHours}
        />
      </div>
      <ControlButtons
        isRunning={isRunning}
        handleStartPause={handleStartPause}
        handleReset={handleReset}
        handleStopForToday={handleStopForToday}
        handleResetTotal={handleResetTotal}
      />
      <div className='mt-8 text-2xl'>
        <span>{amount.toFixed(2)}</span> <span>{currency}</span>
      </div>
      <div className='mt-2 text-2xl'>
        <span>Total Amount: {totalAmount.toFixed(2)}</span>{' '}
        <span>{currency}</span>
      </div>
      <AddItemForm onAddItem={handleAddItem} />
      <ItemList
        items={items}
        progress={totalAmount}
        moveItem={moveItem}
        handleRemoveItem={handleRemoveItem}
        handleEditItem={handleEditItem}
      />
    </div>
  );
};

export default WageCounter;
