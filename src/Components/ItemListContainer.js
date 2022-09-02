import fondo from '../Assets/fondoAirplane.jpg'
const ItemListContainer = () => {

    const greeting = [
        {id:0, slogan: 'El placer de volar' },
        {id:1, slogan: 'Bienvenido' }
    ]

    return(
        <div style={styles.div}>
            {greeting.map((frase)=>{
                return <h2 style={styles.frase} key={frase.id}>{frase.slogan}</h2>
            })}
        </div>
    )
}
const styles = {
    div: {
        width:'100%',
        height:'100vh',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        paddingTop: '100px'
    },
    frase: {
        color: '#6a6b6b',
        fontSize: '45px',
        fontWeight: '400',
        fontStyle: 'italic',
    }
}
export default ItemListContainer