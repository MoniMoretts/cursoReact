import React from "react"
import Item from "./Item/Item"

const ItemList = ({ productos }) => {

    return (
        <div style={styles.div} >
            {productos.map((producto) => {
                return (<Item producto={producto} key={producto.id} />)
            })}
        </div>
    )
}

const styles = {
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginLeft: '40px',
        marginRight: '40px',
        borderRadius: '10px'
    }
}

export default ItemList 