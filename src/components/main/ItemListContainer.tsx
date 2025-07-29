import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../../data/products';
import { getProducts, getProductsByCategory } from '../../data/products';
import ItemList from './ItemList';

type Props = {
  greeting: string;
};

function ItemListContainer({ greeting }: Props) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const data = categoryId
        ? await getProductsByCategory(categoryId)
        : await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;
