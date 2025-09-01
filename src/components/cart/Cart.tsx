import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Tu carrito</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${getTotalPrice()}</h3>
      <button onClick={clearCart} style={{ marginRight: '1rem' }}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}

export default Cart;
