import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !confirmEmail) {
      setError('Por favor completa todos los campos.');
      return;
    }

    if (email !== confirmEmail) {
      setError('Los correos no coinciden.');
      return;
    }

    setError('');

    const order = {
      buyer: { name, email },
      items: cart.map(item => ({
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: getTotalPrice(),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      clearCart();
      alert(`¡Gracias por tu compra! ID de orden: ${docRef.id}`);
      navigate('/');
    } catch (err) {
      console.error('Error al guardar orden:', err);
      setError('Ocurrió un error al procesar la orden.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Confirmar correo electrónico"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
