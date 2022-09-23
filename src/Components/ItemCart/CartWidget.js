import cart from '../../Assets/cart.png';
const CartWidget = () => {


    return (
        <div style={styles.div}>
            <img style={styles.cart} src={cart} alt="cart" />  
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
}
export default CartWidget