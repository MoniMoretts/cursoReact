import ItemDetail from "./ItemDetail/ItemDetail"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    let { IdProducto } = useParams()
    console.log(IdProducto)

    const [productos, setProductos] = useState([])

    const URL_PRODUCT = 'https://fakestoreapi.com/products/'

    useEffect(() => {
        fetch(`${URL_PRODUCT}${IdProducto}`)
            .then((response) => response.json())
            .then((data) => {
                const lista = data.map((product) => {
                    return { ...product }
                })
                setProductos(lista)
            })
            .catch(err => console.error('error:' + err));
    }, [IdProducto])

    return (
        <div>
            {productos.map((producto) => {
                return (<ItemDetail producto={producto} key={producto.id} />)
            })}
        </div>
    )
}


export default ItemDetailContainer