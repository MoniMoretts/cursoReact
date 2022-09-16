import cdg from '../Assets/cdg.jpg'
import ams from '../Assets/ams.jpg'
import fra from '../Assets/fra.jpg'
import ItemList from "./ItemList"
import React, {useState,useEffect} from 'react'

const vuelos = [
    { name: "París", id: 1, price: 3000, stock: 10, img:cdg },
    { name: "Frankfurt", id: 2, price: 3200, stock: 15, img:fra },
    { name: "Amsterdam", id: 3, price: 2800, stock: 20, img:ams },
]

const promesa = new Promise((res, rej) => {
    res(vuelos)
    rej("algo anda mal")
})

const ItemListContainer = () => {
    
    const [boletos, setBoletos] = useState([])

    useEffect(() => {
        setTimeout(() => {
            console.log(promesa);
            promesa
                .then((data) => {
                    console.log("funcionamiento óptimo");
                    setBoletos(data)
                })
        },2000)
    })

    return (
        <>
            <h2 style={styles.h2}>Seleccion la cantidad de boletos que desea comprar</h2>
            <ItemList destinos={boletos}/>
        </>
    )
}

const styles={
    h2:{
        color: '#242424',
        fontWeight: '400',
        fontSize: '30px',
        width: '100%',
        textAlign: 'center',
        marginBottom: '50px',
        marginTop: '50px'
    },
}

export default ItemListContainer