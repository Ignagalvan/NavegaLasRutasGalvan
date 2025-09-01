import { useState } from 'react';
import type { Product } from '../../data/products';
import './items/ItemDetail.css';
import ItemCount from './ItemCount';
import { useCart } from '../../context/CartContext';

type Props = {
  product: Product;
};

function ItemDetail({ product }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty: number) => {
    addToCart(product, qty);
    setAdded(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width={200} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      {added ? (
        <p style={{ color: 'green' }}>¡Producto agregado al carrito!</p>
      ) : (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
}

export default ItemDetail;
