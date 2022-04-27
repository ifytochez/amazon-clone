import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider';

function BasketItem({id, title, image, price, rating}) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      })
  }
  return (
    <div className='basketItem'>
        <img className='basketItem_image' src={image} alt=""/>
        
        <div className='basketItem_info'>
            <p className='basketItem_title'>{title}</p>
            <p className='basketItem_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='basketItem_rating'>
                { Array(rating).fill().map((_, i)=>( <p>*</p> ))}    
            </div>

            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>

       
    </div>
  )
}

export default BasketItem