import cart from '../Assets/cart.png';
const CartWidget = ({numCart}) => {


    return (
        <div style={styles.div}>
            <img style={styles.cart} src={cart} alt="cart" />  
            <span style={styles.span}>{numCart}</span> 
        </div>

    )

}

const styles = {
    div: {
        width: '6%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cart: {
        width: '40%',
    },
    span:{
        width: '40%',
        fontSize: '25px',
        fontWeight: '300'
    }
}
export default CartWidget