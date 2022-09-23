import { NavLink } from "react-router-dom";

const Nav = ({categorias}) => {
    return (
        <nav>
            {categorias.map((categoria) => {
                return <NavLink style={styles.links} key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>
            })}
        </nav>
    )
}

const styles = {
    links: {
        paddingLeft: '20px',
        color: '#242424',
        fontSize: '20px',
        textDecoration: 'none'
    },
}

export default Nav