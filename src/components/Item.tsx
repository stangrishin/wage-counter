import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

interface ItemProps {
  item: {
    id: string;
    name: string;
    price: number;
  };
  progress: number;
  onRemove: () => void;
  onEdit: (id: string, name: string, price: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, progress, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price.toFixed(2));
  const percentage = Math.min((progress / item.price) * 100, 100);

  const handleSave = () => {
    onEdit(item.id, name, parseFloat(price));
    setIsEditing(false);
  };

  return (
    <div className='bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-lg transition-shadow hover:shadow-xl'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center'>
          {isEditing ? (
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mr-2 p-1 border border-gray-300 rounded-lg text-black'
            />
          ) : (
            <div className='font-bold text-lg text-black'>{item.name}</div>
          )}
          {isEditing ? (
            <input
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='mr-2 p-1 border border-gray-300 rounded-lg text-black'
            />
          ) : (
            <div className='text-gray-600'>{item.price.toFixed(2)}</div>
          )}
          <button onClick={isEditing ? handleSave : () => setIsEditing(true)}>
            <FontAwesomeIcon
              icon={isEditing ? faCheck : faPencilAlt}
              className='ml-2 text-blue-500'
            />
          </button>
        </div>
        <button onClick={onRemove}>
          <FontAwesomeIcon icon={faTimes} className='text-red-500' />
        </button>
      </div>
      <div className='relative w-full bg-gray-200 rounded-full h-4 mb-4'>
        <div
          className={`absolute top-0 left-0 h-4 rounded-full transition-width duration-200 ${
            percentage === 100 ? 'bg-green-500' : 'bg-yellow-500'
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
        <span className='absolute inset-0 flex justify-center items-center text-black text-sm'>
          {percentage.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default Item;
