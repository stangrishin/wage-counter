import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { XYCoord } from 'react-dnd';
import Item from './Item';

interface DraggableItemProps {
  item: {
    id: string;
    name: string;
    price: number;
  };
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  progress: number;
  onRemove: () => void;
  onEdit: (id: string, name: string, price: number) => void;
}

const ItemType = 'ITEM';

const DraggableItem: React.FC<DraggableItemProps> = ({
  item,
  index,
  moveItem,
  progress,
  onRemove,
  onEdit,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem: { index: number }, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = draggedItem.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      draggedItem.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className='transition-opacity'
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <Item
        item={item}
        progress={progress}
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </div>
  );
};

export default DraggableItem;
