import cart from '../Assets/cart.png';
const CartWidget = () => {
    return (
        <img style={styles.cart} src={cart} alt="cart" />
    )

}

const styles = {
    cart: {
        width: '3%',
        paddingRight: '30px',
    },
}
export default CartWidget