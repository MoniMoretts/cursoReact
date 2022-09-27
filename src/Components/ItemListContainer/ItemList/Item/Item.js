import { Link } from "react-router-dom"


const Item = ({ producto }) => {

    return (
        <Link style={styles.div} key={producto.id} to={`producto/${producto.id}`} >
            <div style={styles.a}>
                <img style={styles.img} alt={producto.title} src={producto.image} />
            </div>
            <div style={styles.p}>
                <h2 style={styles.h2}>{producto.title}</h2>
            </div>
        </Link>
    )
}
//<ItemCount stock={destino.stock} nombre={destino.model} initial={1} />
const styles = {
    div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '250px',
        height: '350px',
        borderRadius: '5px',
        backgroundColor: '#ededed',
        margin: '20px',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.603)',
        textDecoration: 'none',
    },
    img: {
        height: 'auto',
        width: 'auto',
        maxWidth: '250px',
        maxHeight: '250px'
    },
    h2: {
        color: 'black',
        fontWeight: '400',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '18px',
    },
    p: {
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    a: {
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}

export default Item