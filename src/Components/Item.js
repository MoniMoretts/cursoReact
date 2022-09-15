import ItemCount from "./ItemCount"
const Item = ({ destino }) => {

    return (
        <div style={styles.div}>
            <h2>{destino.name}</h2>
            <img src={destino.img} alt={destino.name} style={styles.img} />
            <p style={styles.p}>Ida y vuelta usd{destino.price}</p>
            <ItemCount stock={destino.stock} nombre={destino.name} initial={1} />
        </div>
    )
}

const styles = {
    div:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
        backgroundColor: '#ededed',
        margin: '40px',
        borderRadius: '10px'
    },
    img: {
        width: '100%'
    },
    p: {
        color: '#242424',
        fontSize: '20px',
        fontWeight: '300',
        textAlign: 'center',
    }
}

export default Item