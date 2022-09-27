import ItemList from "./ItemList/ItemList"
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    let { IdCategoria } = useParams()
    console.log(IdCategoria)

    const [productos, setProductos] = useState([])

    const URL_CATEGORY = 'https://fakestoreapi.com/products/category/'
    const URL_BASE = 'https://fakestoreapi.com/products?sort=desc'

    useEffect(() => {
        fetch(IdCategoria ? `${URL_CATEGORY}${IdCategoria}`:`${URL_BASE}`)
            .then((response) => response.json())
            .then((data) => {
                const lista = data.map((product) => {
                    return { ...product }
                })
                setProductos(lista)
            })
            .catch(err => console.error('error:' + err));
    }, [IdCategoria])

    return (
        <>
            <h2 style={styles.h2}>Lo mejor para vos y para tu bolsillo</h2>
            <ItemList productos={productos} />
        </>
    )
}

const styles = {
    h2: {
        color: 'white',
        fontWeight: '300',
        fontSize: '30px',
        width: '100%',
        textAlign: 'center',
        marginBottom: '50px',
        marginTop: '50px',
        fontStyle: 'italic',
    },
}

export default ItemListContainer