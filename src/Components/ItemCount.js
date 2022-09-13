import React, { useState } from 'react';
import menos from '../Assets/menos.png'
import mas from '../Assets/mas.png'
import boleto from '../Assets/pasaje.png'
import fondo from '../Assets/fondo.jpg'

const ItemCount = () => {
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
        <div style={styles.div}>
            <img style={styles.boletos} src={boleto} alt="boleto" />
            <div style={styles.contador}>
                <img style={styles.botones} src={menos} alt="menos" onClick={restar} />
                <span style={styles.span}>{contador}</span>
                <img style={styles.botones} src={mas} alt="mas" onClick={sumar} />
            </div>
            <button style={styles.boton} onClick={agregar} >Agregar al carrito</button>
            <p style={styles.frase}>{cartel}</p>
            <p style={styles.frase}>{carrito}</p>
        </div>
    )
}
/*labelCart={carrito}*/

const styles = {
    div: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '30px',
        backgroundImage: `url(${fondo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },

    boletos: {
        width: '12%'
    },
    contador: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '25%',
        marginBottom: '60px',
        marginTop: '30px',
        alignItems: 'center'
    },
    botones: {
        width: '10%',
        height: '80%'
    },
    span: {
        color: '#242424',
        fontSize: '30px',
        borderColor: '#ba2974',
        borderStyle: 'solid',
        fontWeight: '400',
        width: '120px',
        textAlign: 'center'
    },
    boton: {
        color: '#242424',
        borderColor: '#ba2974',
        borderStyle: 'solid',
        backgroundColor: '#ba297400',
        fontSize: '25px',
        fontWeight: '300',
    },
    frase: {
        color: '#242424',
        marginTop: '40px',
        fontSize: '28px',
        fontWeight: '400',
        fontStyle: 'italic',
    }
}

export default ItemCount