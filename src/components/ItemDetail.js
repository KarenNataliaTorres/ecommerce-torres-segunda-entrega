import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
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
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;