import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './items/ItemListContainer.css'; 
import { getProductById } from '../../data/products';
import type { Product } from '../../data/products';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (itemId) {
            getProductById(itemId).then((res) => {
                setProduct(res || null);
                setLoading(false);
            });
        }
    }, [itemId]);

    if (loading) return <p style={{ padding: '2rem' }}>Cargando producto...</p>;
    if (!product) return <p style={{ padding: '2rem' }}>Producto no encontrado.</p>;

    return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
