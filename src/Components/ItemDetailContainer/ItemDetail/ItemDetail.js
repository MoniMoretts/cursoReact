import React from "react"

const ItemDetail = ({ producto }) => {

    return (
        <div style={styles.div} >
            <img style={styles.img} alt={producto.title} src={producto.image} />
            <div style={styles.content}>
                <h2 style={styles.h2}>{producto.title}</h2>
                <h2 style={styles.h2}>{producto.price}usd</h2>
                <h3 style={styles.h2}>{producto.category}</h3>
                <h4 style={styles.h2}>{producto.description}</h4>
            </div>
        </div>
    )
}
//<ItemCount stock={destino.stock} nombre={destino.model} initial={1} />
const styles = {
    div: {
        display: 'flex',
        alignItems: 'center',
        width: '70%',
        backgroundColor: '#811c50',
        margin: '40px',
        borderRadius: '10px'
    },
    content:{
        width: '60%',
        paddingLeft: '20px'
    },
    img: {
        width: '30%'
    },
    h2: {
        color: 'white',
        fontWeight: '400',
    },
    p: {
        color: 'white',
        fontSize: '20px',
        fontWeight: '300',
        textAlign: 'center',
    }
}

export default ItemDetail