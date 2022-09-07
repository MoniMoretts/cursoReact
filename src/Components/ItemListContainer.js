import menos from '../Assets/menos.png';
import mas from '../Assets/mas.png';
import boleto from '../Assets/pasaje.png';
import fondo from '../Assets/fondo.jpg';

const ItemListContainer = ({ resta , suma , add , fra , cont }) => {
    
    return (
        <div style={styles.div}>
            <h2 style={styles.h2}>Seleccion la cantidad de boletos que desea comprar</h2>
            <img style={styles.boletos} src={boleto} alt="boleto"/>
            <div style={styles.contador}>
                <img style={styles.botones} src={menos} alt="menos" onClick={resta} />
                <span style={styles.span}>{cont}</span>
                <img style={styles.botones} src={mas} alt="mas" onClick={suma} />
            </div>
            <button style={styles.boton} onClick={add} >Agregar al carrito</button>
            <p style={styles.frase}>{fra}</p>
        </div>
    )
}
const styles = {
    div: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '30px',
        backgroundImage: `url(${fondo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    h2:{
        color: '#262626',
        fontWeight: '400',
        fontSize: '30px'
    },
    boletos:{
        width: '12%'
    },
    contador: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '25%',
        marginBottom: '60px',
        marginTop: '30px',
        alignItems: 'center'
    },
    botones: {
        width: '10%',
        height: '80%'
    },
    span: {
        color: '#242424',
        fontSize: '30px',
        borderColor: '#ba2974',
        borderStyle: 'solid',
        fontWeight: '400',
        width: '120px',
        textAlign: 'center'
    },
    boton: {
        color: '#242424',
        borderColor: '#ba2974',
        borderStyle: 'solid',
        backgroundColor: '#ba297400',
        fontSize: '25px',
        fontWeight: '300',
    },
    frase: {
        color: '#242424',
        marginTop: '40px',
        fontSize: '28px',
        fontWeight: '400',
        fontStyle: 'italic',
    }
}
export default ItemListContainer

