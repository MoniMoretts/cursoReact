import { Link } from "react-router-dom"


const Item = ({ producto }) => {

    return (
        <Link style={styles.div} key={producto.id} to={`producto/${producto.id}`} >
            <img style={styles.img} alt={producto.title} src={producto.image}/>
            <h2 style={styles.h2}>{producto.title}</h2>
        </Link>
    )
}
//<ItemCount stock={destino.stock} nombre={destino.model} initial={1} />
const styles = {
    div:{
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
    h2:{
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

export default Item