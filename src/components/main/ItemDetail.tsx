import type { Product } from '../../data/products';
import './items/ItemDetail.css'; 
import ItemCount from './ItemCount';

type Props = {
    product: Product;
};

function ItemDetail({ product }: Props) {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width={200} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>

            <ItemCount stock={10} initial={1} onAdd={(qty) => alert(`Agregado ${qty} al carrito`)} />
        </div>
    );
}

export default ItemDetail;
