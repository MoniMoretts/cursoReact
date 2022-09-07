import menos from '../Assets/menos.png';
import mas from '../Assets/mas.png';

const ItemListContainer = ({ resta , suma , add , fra , cont }) => {
    
    return (
        <div style={styles.div}>
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '100px'
    },
    contador: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        marginBottom: '60px',
        marginTop: '60px',
    },
    botones: {
        width: '5%',
    },
    span: {
        color: '#6a6b6b',
        fontSize: '40px',
        borderColor: '#ba2974',
        borderStyle: 'solid',
        fontWeight: '300',
        width: '300px',
        textAlign: 'center'
    },
    boton: {
        color: '#6a6b6b',
        borderColor: '#ba2974',
        backgroundColor: 'white',
        fontSize: '25px',
        fontWeight: '300',
    },
    frase: {
        color: '#6a6b6b',
        marginTop: '50px',
        fontSize: '30px',
        fontWeight: '300',
        fontStyle: 'italic',
    }
}
export default ItemListContainer

