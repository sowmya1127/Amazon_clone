import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import HalfStar from '@material-ui/icons/StarHalf'

import './Product3.css'

export default function PurchasedProduct({ id, image, title, price, ratings }) {

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




                </div>

            </div>
        </div>
    )
}
