import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';

function App() {

  const total = 10

  return (
    <>
      <NavBar />
      <ItemListContainer stock = {total} />
    </>
  );
}

export default App;
