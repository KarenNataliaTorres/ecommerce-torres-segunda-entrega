import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import FormatNumber from "../utils/FormatNumber";/* NUEVO */

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
            {/* <div className='Bottom' >
                <div className='Info' > */}
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <div className='Product' key={item.idItem}>
                            <div className='ProductDetail'>
                                <img className='ImageCart' src={item.imgItem} />
                                < div className='Details'>
                                <span>
                                    <b>Product:</b> {item.nameItem}
                                </span>
                                <button className='TopButton'  type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</button>
                                </div>
                            </div>
                            <div className='PriceDetail'>
                                <div className='ProductAmountContainer'>
                                   <div className='ProductAmount'>{item.qtyItem} item(s)</div>
                                /
                                   <div className='ProductAmount'>$ {item.costItem} each</div>
                                </div>
                                <div className='ProductPrice'>$ {test.calcTotalPerItem(item.idItem)} </div>
                            </div>
                            </div>
                            )
                    }
                {/* </div> */}
                {
                    test.cartList.length > 0 &&
                        <div className='Summary'>
                            <h1 className='SummaryTitle'>ORDER SUMMARY</h1>
                            <div className='SummaryItem'>
                                <span className='SummaryItemText'>Subtotal</span>
                                <span className='SummaryItemPrice'><FormatNumber number={test.calcSubTotal()} /></span>
                            </div>
                            <div className='SummaryItem'>
                                <span className='SummaryItemText'>Taxes</span>
                                <span className='SummaryItemPrice'><FormatNumber number={test.calcTaxes()} /></span>
                            </div>
                            <div className='SummaryItem'>
                                <span className='SummaryItemText'>Taxes Discount</span>
                                <span className='SummaryItemPrice'><FormatNumber number={-test.calcTaxes()} /></span>
                            </div>
                            <div className='SummaryItem' type="total">
                                <span className='SummaryItemText'>Total</span>
                                <span className='SummaryItemPrice'><FormatNumber number={test.calcTotal()} /></span>
                            </div>
                            <button className='Button'>CHECKOUT NOW</button>
                        </div>
                }
            {/* </div> */}
                     {/* {
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
                    } */}
 

            </div>

        </div>


    );
}

export default Cart;