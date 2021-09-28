import './Cart.css'
import { useSelector } from 'react-redux'
// import React from 'react'
import CheckoutProduct from '../Component/CheckoutProduct'
import CartImage from '../image/download.jfif'
import { Link } from 'react-router-dom'

export default function Cart() {
    let basket = useSelector(state => state.basket);
    console.log(basket);
    let CheckoutProductDetails = basket.map(item => <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />)
    console.log(CheckoutProductDetails);

    return (
        <div className='cart_main'>

            {/* <div className='cart1'>
                        {CheckoutProductDetails}
                    </div> */}

            <div className='cart_master'>
                <div className='cart_subtotal'>
                    <p>Subtotal (0 items): <strong>INR 10000</strong></p>
                    <label><input type='checkbox' /> this order contains a gift</label><br></br>
                    <Link to='/payment'><button>Proceed to Check</button></Link>
                </div>
                <div className='cart_product'>
                    <div className={basket.length > 0 ? 'image_off' : 'image'} >
                        <img src={CartImage} alt="img1" />
                    </div>
                    <div className='cart_items'>
                        {CheckoutProductDetails}
                    </div>
                </div>
            </div>


        </div>
    )
}
