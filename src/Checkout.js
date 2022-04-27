import React from 'react';
import BasketItem from './BasketItem';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import Header from './Header';


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <> <Header></Header>
    <div className='checkout'>
   <div className='checkout_left'>
      

       <div>
            <h3>Hello, {user.email} </h3>
            <h2 className='checkout_title'>Your Shopping Basket</h2>   

            {basket.map(item => (
              <BasketItem 
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating} 
              />
            ))}
            {/* {BasketItem}   */}
            {/* {BasketItem}   */}
            {/* {BasketItem}   */}
            {/* {BasketItem}   */}
            {/* {BasketItem}   */}
      </div>    
    </div> 

    <div className='checkout_right'>
        <Subtotal/>   
    </div>   
    </div>

    </>
  )
}

export default Checkout

// I PLACED A DUMMY DIV IN OTHER TO PUT THE HEADER