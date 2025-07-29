import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrado por categoría" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '2rem' }}>404 - Página no encontrada</h2>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
