import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './Components/ItemCart/Cart';
import CustomProvider from './Context/Context';

function App() {
  return (

    <div style={styles.div}>
      <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:IdCategoria' element={<ItemListContainer />} />
          <Route path='/categoria/:IdCategoria/producto/:IdProducto' element={<ItemDetailContainer />} />
          <Route path='/producto/:IdProducto' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        </CustomProvider>
      </BrowserRouter>
    </div>
  );
}
const styles = {
  div: {
    backgroundColor: '#811c50',
  }
}
export default App;
//<Route path='/cart' element={<Cart />}/>