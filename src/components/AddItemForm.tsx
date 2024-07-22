import React, { useState } from 'react';

interface AddItemFormProps {
  onAddItem: (name: string, price: number) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemPrice, setNewItemPrice] = useState<string>('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName || !newItemPrice) return;

    onAddItem(newItemName, parseFloat(newItemPrice));
    setNewItemName('');
    setNewItemPrice('');
  };

  return (
    <form onSubmit={handleAddItem} className='flex flex-col mb-8'>
      <input
        type='text'
        placeholder='Item name'
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        className='mb-4 p-2 border border-gray-300 rounded-lg bg-white text-black'
      />
      <input
        type='number'
        placeholder='Item price'
        value={newItemPrice}
        onChange={(e) => setNewItemPrice(e.target.value)}
        className='mb-4 p-2 border border-gray-300 rounded-lg bg-white text-black'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors'
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
