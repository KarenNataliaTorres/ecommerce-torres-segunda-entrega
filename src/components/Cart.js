import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import FormatNumber from "../utils/FormatNumber";
import { updateDoc, serverTimestamp, doc, collection, setDoc, increment } from 'firebase/firestore';
import {db} from '../utils/firebaseConfig'

const Cart = () => {
    const test = useContext(CartContext);
    const createOrder = ()=>{
        let order={
            buyer:{
                name: 'Karen Torres',
                email:'karen.torres@gmail.com',
                phone:'094407353'
                    
            },
            date: serverTimestamp(),
            items: test.cartList.map(item=>({
                id:item.idItem,
                title:item.nameItem,
                price:item.costItem,
                qty:item.qtyItem

            })),
            total:test.calcTotal()
        }
        
        const createOrderInDB = async() =>{
            const newOrderRef = doc(collection(db,'orders'))
            await setDoc(newOrderRef,order);
            return newOrderRef
        }
        createOrderInDB()
        .then(response =>{
            alert('Se creó tu orden de compra en la BD con ID=', response.id)
            test.cartList.forEach(async(item) =>{
                const itemRef = doc(db,"products",item.idItem);
                await updateDoc(itemRef,
                    {stock: increment(-item.qtyItem)
                })

            })
            test.removeList()

        }) 
        .catch(err => console.log(err))
    }

    return (
        <div className="WrapperCart">
            <h1 className='TitleCart'>MI CARRITO</h1>
            <div class="Top">
                <Link to='/'><button className="TopButton">CONTINUAR COMPRANDO </button></Link>
                {
                    (test.cartList.length > 0)
                    ? <button className="TopButton" type="filled" onClick={test.removeList}>ELIMINAR TODOS LOS PRODUCTOS</button>
                    : <span className="TopText">Tu carrito está vacío</span>
                }
            </div>
            <div className='ContentCart' >               
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
                
                {
                    test.cartList.length > 0 &&
                        <div className='Summary'>
                            <h1 className='SummaryTitle'>RESUMEN DEL PEDIDO</h1>
                            <div className='SummaryItem'>
                                <span >Subtotal</span>
                                <span ><FormatNumber number={test.calcSubTotal()} /></span>
                            </div>
                            <div className='SummaryItem'>
                                <span >IMPUESTO</span>
                                <span ><FormatNumber number={test.calcTaxes()} /></span>
                            </div>
                            <div className='SummaryItem'>
                                <span >DESCUENTOS</span>
                                <span ><FormatNumber number={-test.calcTaxes()} /></span>
                            </div>
                            <div className='SummaryItem' type="total">
                                <span >Total</span>
                                <span ><FormatNumber number={test.calcTotal()} /></span>
                            </div>
                            <button onClick={createOrder} className='Button'>GENERAR ORDEN DE COMPRA</button>
                        </div>
                }
            
            </div>

        </div>


    );
}

export default Cart;