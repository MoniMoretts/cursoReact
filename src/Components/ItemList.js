import Item from "./Item"
import React, { useState, useEffect } from "react"

const ItemList = ({ destinos }) => {

    const promesa = new Promise((res, rej) => {
        res(destinos)
        rej("algo anda mal")
    })

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
        <Item info={boletos}/>
    )
}

export default ItemList 