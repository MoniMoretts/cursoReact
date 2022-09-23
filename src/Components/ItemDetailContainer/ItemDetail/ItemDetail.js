import React from "react"

const ItemDetail = ({ producto }) => {
    
    return (
        <div style={styles.div} >
            {producto.map((product) => {
                return (
                    <div key={product.id}>
                        <img style={styles.img} alt={product.title} src={product.image} />
                        <h2 style={styles.h2}>{product.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}
//<ItemCount stock={destino.stock} nombre={destino.model} initial={1} />
const styles = {
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
        backgroundColor: '#811c50',
        margin: '40px',
        borderRadius: '10px'
    },
    img: {
        width: '50%'
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