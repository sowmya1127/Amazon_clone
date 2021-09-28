import React from 'react'
import './Tyre.css'
import Product3 from './Product3'

export default function Tyre() {
    return (
        <div className='Tyre'>
            <div className='Tyre_main'>
                <div className='Tyre_stage1'>
                    <Product3
                        id='611'
                        image='https://m.media-amazon.com/images/I/71CnCbDdGHL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Autophilia For the Love of Cars Features UV Block, Extra Shine, Fragrance Vinyl, Leather, Rim Dashboard Polish and Tyre Shinner (250 ml)'
                        price={389.00}
                        ratings={4} />
                    <Product3
                        id='612'
                        image='https://m.media-amazon.com/images/I/61E3lh8xgvS._AC_UL480_FMwebp_QL65_.jpg'
                        title=' WAVEX ® Works on Alloy Chrome Aluminum Clear Coated, Safe for All Wheels Tires and Rims, Tyre and Alloy Wheel Cleaner - 1 Ltr
                        Visit the WAVEX Store'
                        price={564}
                        rating={4} />


                </div>
                <div className='Tyre_stage2'>
                    <Product3
                        id='614'
                        image='https://m.media-amazon.com/images/I/61a3ocs+9tL._AC_UL480_FMwebp_QL65_.jpg'
                        title='Speedwav Universal 8M/Roll Car-styling Car Vehicle Color Wheel Rims Protector Care Tire Guard Line Rubber Moulding Trim Car Sticker Vinylchange33'
                        price={200.00}
                        ratings={4} />
                    <Product3
                        id='615'
                        image='https://m.media-amazon.com/images/I/81fWFNSOE9L._AC_UL480_FMwebp_QL65_.jpg'
                        title='NIKAVI Car Wheel Rim Brush Hub Clean Wash Useful Brush Car Truck Motorcycle Bike Washing Cleaning Tool'
                        price={260}
                        rating={4} />

                </div>
            </div>
        </div>
    )
}
