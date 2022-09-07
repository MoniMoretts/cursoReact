import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer';
import React, { useState } from 'react';
function App() {

  const stock = 10
  const [contador, setContador] = useState(1);
    const [cartel, setCartel] = useState(``);
    const [carrito, setCarrito] = useState(0);
    const sumar = () => { 
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    const agregar = () => {
        setCartel(`Su carrito posee ${contador} productos`)
        setCarrito(contador)
    }

  return (
    <>
      <NavBar labelCart={carrito} />
      <ItemListContainer resta={restar} suma={sumar} add={agregar} fra={cartel} cont={contador} />
    </>
  );
}

export default App;
