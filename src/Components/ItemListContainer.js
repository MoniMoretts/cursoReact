import cdg from '../Assets/cdg.jpg'
import ams from '../Assets/ams.jpg'
import fra from '../Assets/fra.jpg'
import ItemList from "./ItemList"

const vuelos = [
    { name: "París", id: 1, price: 3000, stock: 10, img:cdg },
    { name: "Frankfurt", id: 2, price: 3200, stock: 15, img:fra },
    { name: "Amsterdam", id: 3, price: 2800, stock: 20, img:ams },
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
        color: 'black',
        fontWeight: '400',
        fontSize: '30px',
        width: '100%',
        textAlign: 'center',
        marginBottom: '50px',
        marginTop: '50px'
    },
}

export default ItemListContainer