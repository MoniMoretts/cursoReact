import fondo from '../Assets/fondoAirplane.jpg';
const Fondo = () => {
    return(
        <div>
            <img style={styles.img} src={fondo} alt="fondo" />
        </div>
    )
}
const styles={
    img: {
        width:'100%'
    }
}
export default Fondo