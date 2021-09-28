

import './CheckoutProduct.css'
import { useDispatch } from "react-redux"

export default function CheckoutProduct({ id, title, image, price, rating }) {
  let dispatch = useDispatch();
  return (


    <div className="checkout_product">
      <img src={image} alt="" className='image' />
      <div className=" checkout_product__info">
        <p>{id}</p>
        <p>{title}</p>
        <p className="checkout_product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: id })}>Remove from cart</button>

      </div>







    </div>

  )
}
