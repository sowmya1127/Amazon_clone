
import './Payment.css'
import { useDispatch } from 'react-redux'
// import React from 'react'

import CartImage from '../image/download.jfif'
import { useHistory } from 'react-router-dom';



export default function Payment() {
    // let basket = useSelector(state => state.basket);
    // console.log(basket);
    // let user = useSelector(state => state.user);

    // let history = useHistory();
    // let dispatch = useDispatch();

    // let buyProducts = (event) => {
    //      alert('iam going to purchase the product')
    //     //  console.log(basket);
    //     event.preventDefault();
    //     //  console.log('*****************');

    //     //  console.log(user.uid);
    //     //  console.log(db);       
    //     //  const users= db.collection('users');      
    //     //  console.log(users);

    //     let paymentId = uuidv4();
    //     console.log(paymentId);
    //     db.collection('users').doc(user?.uid).collection('orders').doc(paymentId).set({
    //         basket: basket
    //         //  amout : 10000         
    //     })
    //     console.log("after payment");
    //     alert('Payment is successful Happy shopping !')
    //     dispatch({
    //         type: 'EMPTY_BASKET',
    //     })
    //     history.replace('/orders');

    // }


    let history = useHistory();
    let dispatch = useDispatch();

    let buyProducts = () => {
        alert("your payment is done")
        history.push("/")
        dispatch({ type: "EMPTY_BASKET" })
    }

    return (
        <div className='cart_main'>
            <div>
                <img src={CartImage} alt="img1" />
            </div>
            <div>

                <button onClick={buyProducts}>BUY Products</button>
            </div>
            {/* <div>
                 {CheckoutProductDetails}
             </div> */}


        </div>
    )
}
