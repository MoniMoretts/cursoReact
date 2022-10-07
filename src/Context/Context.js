import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();


const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let qtyProduct = 0
    cart.forEach((producto)=>
    qtyProduct = qtyProduct + producto.cantidad
    )
    setCantidad(qtyProduct);
  }, [cart])
  

  const agregar = (producto, qtyProduct) => {
    if (estaEnLista(producto.id)) {
      setCart(
        cart.map((item) => {
          if (item.producto.id === producto.id) {
            return {
              producto: item.producto,
              qtyProduct: item.qtyProduct + qtyProduct,
            };
          }
          return item;
        })
       )
       } else {
      setCart([...cart, { producto, qtyProduct }]);
    }
    setCantidad(cantidad + qtyProduct);
    setTotal(total + ( qtyProduct * producto.price ));
  };

  const borrar = (id) => {
    const productCart = cart.find((item)=>item.producto.id === id)
    console.log(id)
    console.log(productCart)
    setCart(
      cart.filter((item) => {
        return item.producto.id !== id;
      })
    );
    setCantidad(cantidad - productCart.qtyProduct);
    setTotal(total - ( productCart.qtyProduct * productCart.producto.price));
  };

  const estaEnLista = (id) => cart.some((producto) => producto.id === id);

  const reset = () => {
    setCart([]);
  };


  return (
    <Context.Provider
      value={{
        cantidad,
        cart,
        total,
        agregar,
        borrar,
        reset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CustomProvider;