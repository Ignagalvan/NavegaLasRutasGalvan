import Item from './Item';
import type { Product } from '../../data/products';
import './items/ItemList.css'; 

type Props = {
    products: Product[];
};

function ItemList({ products }: Props) {
    return (
        <div className="item-list">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemList;
