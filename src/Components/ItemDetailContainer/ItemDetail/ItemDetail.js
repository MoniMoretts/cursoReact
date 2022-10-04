import React, { useContext } from "react"
import ItemCount from "../../ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context/Context";

export const ItemDetail = ({ producto }) => {

    const [agregarCarrito, setAgregarCarrito] = useState(false);
    const {agregar} = useContext(Context)

    const onAdd = (contador) => {
        setAgregarCarrito(true)
        agregar(producto,contador)
    }

    return (
        <div style={styles.div} >
            <img style={styles.img} alt={producto.title} src={producto.image} />
            <div style={styles.content}>
                <h2 style={styles.h2}>{producto.title}</h2>
                <h3 style={styles.h3}>{producto.price}usd</h3>
                <h4 style={styles.h4}>{producto.description}</h4>
                {!agregarCarrito ? (
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                ) : (
                    <Link style={styles.link} to="/cart">
                        <button style={styles.boton}>Finalizar Compra</button>
                    </Link>
                )}
            </div>
        </div>
    )
}


const styles = {
    div: {
        display: 'flex',
        alignItems: 'center',
        width: '70%',
        backgroundColor: '#811c50',
        margin: '40px',
        borderRadius: '10px',
    },
    content: {
        width: '60%',
        paddingLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    boton: {
        backgroundColor: '#811c50',
        color: 'white',
        fontSize: '18px',
        borderColor: 'white',
        padding: '10px',
        borderRadius: '5px'
    },
    img: {
        width: '30%',
        borderRadius: '15px'
    },
    h2: {
        color: 'white',
        fontWeight: '400',
    },
    h3: {
        color: 'white',
        fontWeight: '400',
        fontSize: '25px'
    },
    h4: {
        color: 'white',
        fontWeight: '400',
        marginBottom: '40px'
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none'
    }
}

