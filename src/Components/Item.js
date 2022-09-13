import React, { useState } from "react"
import menos from '../Assets/menos.png'
import mas from '../Assets/mas.png'

const Item = ({ info }) => {

    const [contador, setContador] = useState(1);
                

    return (
        <div style={styles.div}>
            {info.map((boleto) => {
                const sumar = () => {
                    if (contador < boleto.stock) {
                        setContador(contador + 1)
                    }
                }
                const restar = () => {
                    if (contador > 1) {
                        setContador(contador - 1)
                    }
                }
                return (
                    <div style={styles.items}>
                        <h2>{boleto.name}</h2>
                        <img style={styles.boletos} src={boleto.img} alt="boletos" />
                        <p>${boleto.price}</p>
                        <div style={styles.contador}>
                            <img style={styles.botones} src={menos} alt="menos" onClick={restar} />
                            <span style={styles.span}>{contador}</span>
                            <img style={styles.botones} src={mas} alt="mas" onClick={sumar} />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

const styles = {
    contador: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '50%',
        marginBottom: '60px',
        marginTop: '30px',
        alignItems: 'center'
    },
    boletos: {
        width: '30%'
    },
    botones: {
        width: '20%',
        height: '80%'
    },
    span: {
        color: '#242424',
        fontSize: '30px',
        borderColor: '#ba2974',
        borderStyle: 'solid',
        fontWeight: '400',
        width: '30%',
        textAlign: 'center',
        marginRight: '20px',
        marginLeft: '20px'
    },
    items: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '30px',
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

}
export default Item