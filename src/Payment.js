import React from 'react'
import './Payment.css'
import Header from './Header';
import { useStateValue } from './StateProvider'
import BasketItem from './BasketItem';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {useState} from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useEffect } from 'react';
import axios from './axios';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(false);

    useEffect(() => {
        // generate the special stripe secret which allows you to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // stripe expects the total in a currency subunit hence the * 100 below since we are using dollars
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("the secret is >>>", clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {payment_method: {
            card: elements.getElement(CardElement)
        }}).then(({paymentIntent}) => {

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            navigate.replace('/orderss')
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
  return (
    <> <Header></Header>
    <div className='payment'>
        <div className='payment_container'>

            <h1>Checkout (<Link to="/Checkout">{basket?.length} items</Link>)</h1>

            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment-address'>
                    <p>{user?.email}</p>
                    <p>Lawal Yaba Lagos</p>
                    <p>Nigeria</p>
                </div>
            </div>


            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review Items and Delivery</h3>
                </div>

                <div className='payment-items'>
                    {basket.map(item =>(
                        <BasketItem 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating} 
                    />
                    ))}
                </div>
            </div>


            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>

                <div className='payment-details'>
                   {/* {scripe magic} */}

                   <form onSubmit={handleSubmit}>
                       <CardElement onChange={handleChange}/>

                       <div className='payment-container'>
                       <CurrencyFormat
                            renderText={(value) =>(
                                <h3>Order Total: {value}</h3>
                            )} 
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}  
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                        </button>
                       </div>

                       {/* {Errors} */}
                       {error && <div>{error}</div>}
                       {/* the above means if there is an error , then dispaly the div that contains the error message */}
                   </form>
                </div>
            </div>


        </div>
    </div>
    </>
  )
}

export default Payment