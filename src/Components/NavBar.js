import React from "react";
import logo from '../Assets/logo.png';
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <header style={styles.container}>
            <div style={styles.marca}>
                <img style={styles.logo} src={logo} alt="logo" />
                <h1 style={styles.titulo}>Baires Airways</h1>
            </div>
            <nav>
                <a style={styles.links} href="">Check-in</a>
                <a style={styles.links} href="">Vuelos</a>
                <a style={styles.links} href="">Productos</a>
            </nav>
            <CartWidget />
        </header>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ededed',
    },
    marca: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '7%',
        paddingLeft: '30px',
    },
    links: {
        paddingLeft: '20px',
        color: '#6a6b6b',
        fontSize: '20px',
        textDecoration: 'none'
    },
    titulo: {
        color: '#ba2974',
        paddingLeft: '30px',
        fontStyle: 'italic',
        fontWeight: '400',
    },
}
export default NavBar