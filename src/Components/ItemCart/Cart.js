import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, total, borrar, reset } = useContext(Context);
  console.log(cart);

  return (
    <>
      {cart.length === 0 ? (
        <h1 style={styles.h1}>
          No posee ningun producto en el carrito <Link style={styles.cont} to="/">CONTINUAR COMPRANDO</Link>
        </h1>
      ) : (
        <div style={styles.div}>
          {cart.map((item) => (
            <div style={styles.vista} key={item.producto.id}>
              <h2 style={styles.h2}>{item.producto.title}</h2>
              <h2 style={styles.h2}>Precio Unitario: {item.producto.price}</h2>
              <h2 style={styles.h2}>Cantidad: {item.qtyProduct}</h2>
              <button style={styles.boton}
                onClick={() => {
                  borrar(item.producto.id);
                }}
              >
                Eliminar del Carrito
              </button>
            </div>
          ))}
          <h3 style={styles.h2}>Total: {total.toFixed(2)}</h3>
          <button style={styles.boton} onClick={reset}>Vaciar Carrito</button>
        </div>
      )}
    </>
  );
}

const styles = {
    h1:{
        color: 'white',
        textAlign: 'center',
        height: '460px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '200',
        fontSize: '30px',
    },
    h2: {
        color: 'white',
        fontWeight: '300',
        fontSize: '25px'
    },
    vista:{
        borderStyle: 'solid',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '40px'
    },
    boton: {
        backgroundColor: '#811c50',
        color: 'white',
        fontSize: '18px',
        borderColor: 'white',
        padding: '10px',
        borderRadius: '5px'
    },
    cont:{
        textDecoration: 'none',
        color: 'white',
        boderColor: 'white',
        borderStyle: 'solid',
        maxWidth: '350px',
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        fontSize: '25px'
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        alignItems: 'center',
        fontSize: '20px',
    }
}

export default Cart