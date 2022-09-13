import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import fondo from './Assets/fondo.jpg'

function App() {
  return (
    <div style={styles.div}>
      <NavBar  />
      <ItemListContainer />
    </div>
  );
}
const styles = {
  div:{
    backgroundImage:`url(${fondo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
}
export default App;
