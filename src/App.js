import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (

    <div style={styles.div}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:IdCategoria' element={<ItemListContainer />} />
          <Route path='/categoria/:IdCategoria/producto/:IdProducto' element={<ItemDetailContainer />} />
          <Route path='/producto/:IdProducto' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const styles = {
  div: {
    backgroundColor: 'black',
  }
}
export default App;
//<Route path='/cart' element={<Cart />}/>