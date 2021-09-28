import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import HalfStar from '@material-ui/icons/StarHalf'
import { useDispatch } from 'react-redux'
import './Product3.css'

export default function Product3({ id, image, title, price, ratings }) {
    let dispatch = useDispatch()
    return (
        <div>
            <div className='product3_main'>
                <div className='product3_row'>
                    <div className='product3_image'>
                        <img src={image} alt="img1"></img>
                    </div>
                    <div className='product3_details'>
                        <span className='product3_title'>{title}</span>
                        <div className='product3_icons'>

                            <StarIcon className='product3__startIcon' />
                            <StarIcon className='product3__startIcon' />
                            <StarIcon className='product3__startIcon' />
                            <StarIcon className='product3__startIcon' />
                            <HalfStar className='product3__startIcon' />
                            <span className='product3__review'>{ratings}</span>
                        </div>
                    </div>
                    <div className='product3_price'>
                        <span className='product3_inr'>INR</span>
                        <span className='product3_cost'>{price}</span>
                    </div>
                    <button onClick={() => dispatch({ type: 'ADD_TO_CART', item: { id: id, title: title, image: image, price: price, rating: ratings } })}>Add to Basket</button>



                </div>

            </div>
        </div>
    )
}
