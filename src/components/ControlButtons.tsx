import React from 'react';

interface ControlButtonsProps {
  isRunning: boolean;
  handleStartPause: () => void;
  handleReset: () => void;
  handleStopForToday: () => void;
  handleResetTotal: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  isRunning,
  handleStartPause,
  handleReset,
  handleStopForToday,
  handleResetTotal,
}) => {
  return (
    <div className='flex items-center justify-between'>
      <button
        onClick={handleStartPause}
        className='bg-blue-500 text-white p-2 rounded w-1/3 mr-2'
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={handleReset}
        className='bg-yellow-500 text-white p-2 rounded w-1/3 mr-2'
      >
        Reset
      </button>
      <button
        onClick={handleStopForToday}
        className='bg-red-500 text-white p-2 rounded w-1/3'
      >
        Stop for Today
      </button>
      <button
        onClick={handleResetTotal}
        className='bg-red-700 text-white p-2 rounded w-1/3 ml-3'
      >
        RESET TOTAL
      </button>
    </div>
  );
};

export default ControlButtons;
