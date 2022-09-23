import React from "react"
import logo from '../../Assets/logoHorse.png'
import CartWidget from '../ItemCart/CartWidget'
import Nav from "./Nav/Nav"
import { Link } from "react-router-dom"
const NavBar = () => {
    const categorias = [
        { id: 0, nombre: 'electronics', ruta: 'categoria/electronics' },
        { id: 1, nombre: 'jewelery', ruta: 'categoria/jewelery' },
        { id: 2, nombre: "men's clothing", ruta: "categoria/men's clothing" },
        { id: 3, nombre: "women's clothing", ruta: "categoria/women's clothing" },
    ]
    return (
        <header style={styles.container}>
            <div style={styles.marca}>
                <Link style={styles.logos} key='1' to='/'><img style={styles.logo} src={logo} alt="logo" /></Link>
                <Link key='2' to='/' style={styles.titulo}>Baires Store</Link>
            </div>
            <Nav categorias={categorias}/>
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
        height: '80px'
    },
    marca: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
    },
    logos: {
        width: '7%',
        marginLeft: '30px',
    },
    titulo: {
        color: '#ba2974',
        paddingLeft: '30px',
        fontStyle: 'italic',
        width: '25%',
        fontWeight: '400',
        marginLeft: '10px',
        fontSize: '30px',
        textDecoration: 'none'
    },
}
export default NavBar