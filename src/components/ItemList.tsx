import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './DraggableItem';

interface Item {
  id: string;
  name: string;
  price: number;
  accumulated: number;
}

interface ItemListProps {
  items: Item[];
  progress: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  handleRemoveItem: (itemId: string) => void;
  handleEditItem: (id: string, name: string, price: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  progress,
  moveItem,
  handleRemoveItem,
  handleEditItem,
}) => {
  const accumulatedProgress = items.reduce(
    (acc, item, index) => {
      if (progress <= 0) return acc;
      const remainingProgress = Math.max(progress - acc.total, 0);
      const itemProgress = Math.min(remainingProgress, item.price);
      acc.total += itemProgress;
      acc.items[index] = itemProgress;
      return acc;
    },
    { total: 0, items: items.map(() => 0) }
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto'>
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
            progress={accumulatedProgress.items[index]}
            onRemove={() => handleRemoveItem(item.id)}
            onEdit={handleEditItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default ItemList;
