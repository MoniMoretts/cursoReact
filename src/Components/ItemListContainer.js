import pasaje from '../Assets/pasaje.png'
import ItemList from "./ItemList"

const vuelos = [
    { name: "París", id: 1, price: 3000, stock: 10, img:pasaje },
    { name: "Frankfurt", id: 2, price: 3200, stock: 15, img:pasaje },
    { name: "Amsterdam", id: 3, price: 2800, stock: 20, img:pasaje },
]

const ItemListContainer = () => {

    return (
        <>
            <h2 style={styles.h2}>Seleccion la cantidad de boletos que desea comprar</h2>
            <ItemList destinos={vuelos}/>
        </>
    )
}

const styles={
    h2:{
        color: '#262626',
        fontWeight: '400',
        fontSize: '30px',
        width: '100%',
        textAlign: 'center',
        marginBottom: '70px'
    },
}

export default ItemListContainer