import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div className="WrapperCart">
            <h1 className='TitleCart'>MI CARRITO</h1>
            <div class="Top">
                <Link to='/'><button className="TopButton">CONTINUE SHOPPING</button></Link>
                {
                    (test.cartList.length > 0)
                    ? <button className="TopButton" type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</button>
                    : <span className="TopText">Tu carrito está vacío</span>
                }
            </div>
            <div className='ContentCart' >
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <div className='Product'  key={item.idItem}>
                        <div className='ProductDetail' >
                            <img className='ImageCart'  src={item.imgItem} />
                            <div className='Details' >
                            <span>
                                <b>Product:</b> {item.nameItem}
                            </span>
                            <button className='TopButton'  type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</button>
                            </div>
                        </div>
                        <div className='PriceDetail' >
                            <div className='ProductAmountContainer'>
                            <div className='ProductAmount'>{item.qtyItem} item(s)</div>
                            </div>
                            <div className='ProductPrice' >$ {item.costItem} each</div>
                        </div>
                        </div>
                        )
                        : <h1 className='TitleCart'></h1>
                    }
            </div>
        </div>
    );
}

export default Cart;