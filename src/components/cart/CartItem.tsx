import { useCart } from '../../context/CartContext';
import type { Product } from '../../data/products';

type Props = {
  item: Product & { quantity: number };
};

function CartItem({ item }: Props) {
  const { removeFromCart } = useCart();

  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
      <h4>{item.name}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
