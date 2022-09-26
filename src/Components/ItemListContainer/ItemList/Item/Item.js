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
        backgroundColor: '#ededed',
        margin: '40px',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.603)'
    },
    img: {
        width: '50%'
    },
    h2:{
        color: 'black',
        fontWeight: '400',
        textAlign: 'center',
        textDecoration: 'none',
    },
    p: {
        color: 'white',
        fontSize: '20px',
        fontWeight: '300',
        textAlign: 'center',
    }
}

export default Item