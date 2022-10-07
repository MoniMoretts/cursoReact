import cart from '../../Assets/cart.png';
import { Link } from "react-router-dom"
import { Context } from '../../Context/Context';
import { useContext } from 'react';
const CartWidget = () => {
    const { cantidad } = useContext(Context)
    return (
        <div style={styles.div}>
            <Link style={styles.content} key='1' to='/cart'><img style={styles.cart} src={cart} alt="cart" /></Link>
            {cantidad > 0 && <p>{cantidad}</p>}
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
    content: {
        display: 'flex',
        justifyContent: 'center'
    }
}
export default CartWidget