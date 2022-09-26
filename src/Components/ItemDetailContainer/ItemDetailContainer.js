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
            .then((info) => {setProductos(info)})
            .catch(err => console.error('error:' + err));
    }, [IdProducto])

    return (
        <div>
            <ItemDetail producto={productos} />
        </div>
    )
}


export default ItemDetailContainer