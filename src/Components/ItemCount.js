import React, { useState } from 'react'
import mas from '../Assets/mas.png'
import menos from '../Assets/menos.png'

const ItemCount = ({ stock, initial, nombre }) => {
    const [contador, setContador] = useState(initial)
    const sumar = () => {
       if (contador < stock) {
        setContador(contador + 1)
       } 
    }
    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1)
           }
    }
    return (
            <div style={styles.contador}>
                <img style={styles.botones} src={mas} alt="mas" onClick={sumar} />
                <span style={styles.span}>{contador}</span>
                <img style={styles.botones} src={menos} alt="menos" onClick={restar} />
            </div>
    )
}

const styles={
    contador: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '50%',
        marginBottom: '30px',
        marginTop: '0px',
        alignItems: 'center'
    },
    botones: {
        width: '15%',
        height: '80%'
    },
    span: {
        color: 'white',
        fontSize: '30px',
        fontWeight: '400',
        width: '30%',
        textAlign: 'center',
        marginRight: '0px',
        marginLeft: '0px'
    },
}

export default ItemCount