import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartWidget.css';

function CartWidget() {
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  return (
    <div className="cart-widget">
      <Link to="/cart" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        🛒
        {quantity > 0 && <span className="cart-count">{quantity}</span>}
      </Link>
    </div>
  );
}

export default CartWidget;
