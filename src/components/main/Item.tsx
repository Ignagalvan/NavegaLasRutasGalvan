import { Link } from 'react-router-dom';
import './items/Item.css';
import type { Product } from '../../data/products';

type Props = {
    product: Product;
};

function Item({ product }: Props) {
    return (
        <div className="item-card">
            <img src={product.image} alt={product.name} width={150} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </div>
    );
}

export default Item;
