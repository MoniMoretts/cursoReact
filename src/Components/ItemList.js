import React from "react"
import Item from "./Item"

const ItemList = ({ destinos }) => {
    
return(
    <div style={styles.div} >
    {destinos.map((destino)=>{
        return(<Item destino={destino} key={destino.id} />)
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