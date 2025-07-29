import { useState } from 'react';
import './items/ItemCount.css'; 


type Props = {
    stock: number;
    initial: number;
    onAdd: (quantity: number) => void;
};

function ItemCount({ stock, initial, onAdd }: Props) {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleSub = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div style={{ marginTop: '1rem' }}>
            <div>
                <button onClick={handleSub}>-</button>
                <span style={{ margin: '0 1rem' }}>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button onClick={() => onAdd(count)} style={{ marginTop: '1rem' }}>
                Agregar al carrito
            </button>
        </div>
    );
}

export default ItemCount;
