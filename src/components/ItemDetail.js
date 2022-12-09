import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item,qty)
    }

    return (
        <>
        {
            item && item.image
            ? 
            <div className='DetailContainer'>
                <div className='WrapperDetail'>
                    <div className='ImgContainer'>
                        <img className='ImageDetail' src={item.image[0]} />
                    </div>
                    <div className='InfoContainer'>
                        <h1 className='Title'>{item.name}</h1>
                        <p className='Desc'>{item.description}</p>
                        <span className='Price'>$ {item.cost}</span>
                        <p className='Desc'>{item.stock} unidades en stock</p>
                    </div>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><button variant="contained" color="secondary">IR AL CARRITO</button></Link>
                    }
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;