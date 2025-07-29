import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo">MiTiendaDev</Link>

      <ul className="navbar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
      </ul>
            <CartWidget />
    </div>
    </nav>
  );
}

export default NavBar;