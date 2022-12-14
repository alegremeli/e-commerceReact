import React from 'react';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext'

const ItemDetail = ({ item }) => {
    const [contador, setContador] = useState(0); // Inicialmente el contador es 0
    const {addItem}  = useContext(CartContext);

    const onAdd = (cantidadItems) => {
        setContador(cantidadItems)
        addItem(item, cantidadItems)
    }
    return (
<div className='cardsDetail' >
   <> 
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>Stock disponible: {item.stock}</p>
        <p>${item.precio}</p>
        <img className='imagenesDetail'  src={`/img/${item.imagen}`} />
        <div className='botones'>
        {
            (contador == 0)
            ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
            : <Link to="/cart"> <button className='botonCarrito' >Ir al carrito</button> </Link>
            }

        </div>
        </>
</div>
    );
}

    export default ItemDetail;
            