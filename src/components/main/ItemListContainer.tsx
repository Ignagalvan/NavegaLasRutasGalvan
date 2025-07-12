import React from 'react';
import './ItemListContainer.css';

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Aquí se mostrará el catálogo de productos próximamente.</p>
    </div>
  );
};

export default ItemListContainer;